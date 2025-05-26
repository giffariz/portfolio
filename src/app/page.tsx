"use client";
import { useState } from "react";
import { Tabs } from "@mantine/core";
import { Navbar } from "@/components/Navbar/Navbar";
import { Content } from "@/components/Content/Content";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | null>("home");

  return (
    <Tabs variant="none" value={activeTab} onChange={setActiveTab} h={"100dvh"} mah={"100dvh"} style={{ overflow: "hidden" }}>
      <Navbar activeTab={activeTab} />
      <Content
        onClickProjects={() => setActiveTab("projects")}
        activeTab={activeTab}
      />
    </Tabs>
  );
}
