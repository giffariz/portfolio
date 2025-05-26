"use client";
import { Tabs, FloatingIndicator, Text, Flex } from "@mantine/core";
import {
    IconHomeFilled,
    IconBriefcaseFilled,
    IconCodeCircleFilled,
    IconUserFilled,
} from "@tabler/icons-react";
import { useState } from "react";
import classes from "./Navbar.module.css";

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
        <Tabs.List grow ref={setRootRef} className={classes.list} justify="center">
            <Tabs.Tab
                value="home"
                ref={setControlRef("home")}
                className={classes.tab}
            >
                <Flex align="center" direction="column" gap={0}>
                    <IconHomeFilled size={20} />
                    <Text fw={500} size="xs">
                        Home
                    </Text>
                </Flex>
            </Tabs.Tab>
            <Tabs.Tab
                value="experience"
                ref={setControlRef("experience")}
                className={classes.tab}
            >
                <Flex align="center" direction="column" gap={0}>
                    <IconBriefcaseFilled size={20} />
                    <Text fw={500} size="xs">
                        Experience
                    </Text>
                </Flex>
            </Tabs.Tab>
            <Tabs.Tab
                value="projects"
                ref={setControlRef("projects")}
                className={classes.tab}
            >
                <Flex align="center" direction="column" gap={0}>
                    <IconCodeCircleFilled size={20} />
                    <Text fw={500} size="xs">
                        Projects
                    </Text>
                </Flex>
            </Tabs.Tab>
            <Tabs.Tab
                value="about"
                ref={setControlRef("about")}
                className={classes.tab}
            >
                <Flex align="center" direction="column" gap={0}>
                    <IconUserFilled size={20} />
                    <Text fw={500} size="xs">
                        About
                    </Text>
                </Flex>
            </Tabs.Tab>

            <FloatingIndicator
                target={activeTab ? controlsRefs[activeTab] : null}
                parent={rootRef}
                className={classes.indicator}
                transitionDuration={500}
            />
        </Tabs.List>
    );
};
