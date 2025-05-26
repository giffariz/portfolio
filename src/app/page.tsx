"use client";
import { useEffect, useRef, useState } from "react";
import { AppShell, Group, Tabs } from "@mantine/core";
import { Navbar } from "@/components/Navbar/Navbar";
import { Content } from "@/components/Content/Content";
import LanguageSelector from "@/components/LanguageSelector/LanguageSelector";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { Logo } from "@/components/Loader/Logo";

const tabs = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About Me" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | null>("home");

  const touchStartX = useRef<number>(0)
  const touchStartY = useRef<number>(0)

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: TouchEvent) => {
    if (!touchStartX.current || !touchStartY.current) return

    const touchEndX = e.changedTouches[0].clientX
    const touchEndY = e.changedTouches[0].clientY

    const diffX = touchStartX.current - touchEndX
    const diffY = touchStartY.current - touchEndY

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      const currentIndex = tabs.findIndex((tab) => tab.id === activeTab)

      if (diffX > 0 && currentIndex < tabs.length - 1) {
        setActiveTab(tabs[currentIndex + 1].id)
      } else if (diffX < 0 && currentIndex > 0) {
        setActiveTab(tabs[currentIndex - 1].id)
      }
    }

    touchStartX.current = 0
    touchStartY.current = 0
  }

  useEffect(() => {
    const handleStart = (e: TouchEvent) => handleTouchStart(e)
    const handleEnd = (e: TouchEvent) => handleTouchEnd(e)

    document.addEventListener("touchstart", handleStart, { passive: true })
    document.addEventListener("touchend", handleEnd, { passive: true })

    return () => {
      document.removeEventListener("touchstart", handleStart)
      document.removeEventListener("touchend", handleEnd)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab])

  return (
    <Tabs variant="none" value={activeTab} onChange={setActiveTab}>
      <AppShell
        header={{ height: 60 }}
        footer={{ height: 60 }}
        padding="md"
      >
        <AppShell.Header bd={"none"} ml={-15} style={{
          backgroundColor: "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))"
        }}>
          <Group h="100%" px="md" justify="space-between" align="center">
            <Logo animate={false} size={60}/>
            <Group gap={5} mt={-8}>
              <LanguageSelector />
              <ThemeToggle />
            </Group>
          </Group>
        </AppShell.Header>
        <AppShell.Main>
          <Content
            onClickProjects={() => setActiveTab("projects")}
            activeTab={activeTab}
          />
        </AppShell.Main>
        <AppShell.Footer bd={"none"} style={{
          backgroundColor: "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))"
        }}>
          <Navbar activeTab={activeTab} />
        </AppShell.Footer>
      </AppShell>
    </Tabs>
  );
}
