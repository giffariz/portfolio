"use client";
import {
    Tabs,
    Center,
    FloatingIndicator,
    Divider,
    Text,
} from "@mantine/core";
import {
    IconHomeFilled,
    IconBriefcaseFilled,
    IconCodeCircleFilled,
    IconUserFilled,
} from "@tabler/icons-react";
import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

interface NavbarProps {
    activeTab: string | null;
}

export const Navbar = ({ activeTab }: NavbarProps) => {
    const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
    const [controlsRefs, setControlsRefs] = useState<
        Record<string, HTMLButtonElement | null>
    >({});
    const setControlRef = (val: string) => (node: HTMLButtonElement) => {
        controlsRefs[val] = node;
        setControlsRefs(controlsRefs);
    };

    return (
        <Tabs.List ref={setRootRef} className={classes.list}>
            <Tabs.Tab value="home" ref={setControlRef("home")} className={classes.tab}>
                <Center inline>
                    <IconHomeFilled size={20} className="mantine-hidden-from-md" />
                    <Text fw={500} ml={5} visibleFrom="md">
                        Home
                    </Text>
                </Center>
            </Tabs.Tab>
            <Tabs.Tab value="experience" ref={setControlRef("experience")} className={classes.tab}>
                <Center inline>
                    <IconBriefcaseFilled size={20} className="mantine-hidden-from-md" />
                    <Text fw={500} ml={5} visibleFrom="md">
                        Experience
                    </Text>
                </Center>
            </Tabs.Tab>
            <Tabs.Tab value="projects" ref={setControlRef("projects")} className={classes.tab}>
                <Center inline>
                    <IconCodeCircleFilled size={20} className="mantine-hidden-from-md" />
                    <Text fw={500} ml={5} visibleFrom="md">
                        Projects
                    </Text>
                </Center>
            </Tabs.Tab>
            <Tabs.Tab value="about" ref={setControlRef("about")} className={classes.tab}>
                <Center inline>
                    <IconUserFilled size={20} className="mantine-hidden-from-md" />
                    <Text fw={500} ml={5} visibleFrom="md">
                        About
                    </Text>
                </Center>
            </Tabs.Tab>

            <FloatingIndicator
                target={activeTab ? controlsRefs[activeTab] : null}
                parent={rootRef}
                className={classes.indicator}
                transitionDuration={500}
            />

            <Divider orientation="vertical" size={"sm"} mr={10} />
            <LanguageSelector />
            <ThemeToggle />
        </Tabs.List>
    );
};
