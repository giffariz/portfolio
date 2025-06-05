"use client";
import { AppShell, Group, Tabs } from "@mantine/core";
import { Navbar } from "@/components/Navbar/Navbar";
import { Content } from "@/components/Content/Content";
import LanguageSelector from "@/components/LanguageSelector/LanguageSelector";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { Logo } from "@/components/Loader/Logo";
import { useSwipeHandler } from "@/hooks/useSwipeHandler";
import Tooltip from "@/components/Tooltip/Tooltip";

export default function Home() {
  const { activeTab, setActiveTab } = useSwipeHandler();

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
            <Logo animate={false} size={60} />
            <Group gap={5} mt={-8}>
              <LanguageSelector />
              <ThemeToggle />
              <Tooltip />
            </Group>
          </Group>
        </AppShell.Header>
        <AppShell.Main style={activeTab === "home" ? { alignContent: "center" } : {}}>
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
