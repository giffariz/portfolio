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
                    <IconHomeFilled size={20} className="mantine-hidden-from-sm" />
                    <Text fw={500} ml={5} visibleFrom="sm">
                        Home
                    </Text>
                </Center>
            </Tabs.Tab>
            <Tabs.Tab value="experience" ref={setControlRef("experience")} className={classes.tab}>
                <Center inline>
                    <IconBriefcaseFilled size={20} className="mantine-hidden-from-sm" />
                    <Text fw={500} ml={5} visibleFrom="sm">
                        Experience
                    </Text>
                </Center>
            </Tabs.Tab>
            <Tabs.Tab value="projects" ref={setControlRef("projects")} className={classes.tab}>
                <Center inline>
                    <IconCodeCircleFilled size={20} className="mantine-hidden-from-sm" />
                    <Text fw={500} ml={5} visibleFrom="sm">
                        Projects
                    </Text>
                </Center>
            </Tabs.Tab>
            <Tabs.Tab value="about" ref={setControlRef("about")} className={classes.tab}>
                <Center inline>
                    <IconUserFilled size={20} className="mantine-hidden-from-sm" />
                    <Text fw={500} ml={5} visibleFrom="sm">
                        About Me
                    </Text>
                </Center>
            </Tabs.Tab>

            <FloatingIndicator
                target={activeTab ? controlsRefs[activeTab] : null}
                parent={rootRef}
                className={classes.indicator}
                transitionDuration={500}
            />

            <Divider orientation="vertical" size={"sm"} ml={10} mr={10} />
            <ThemeToggle />
        </Tabs.List>
    );
};
