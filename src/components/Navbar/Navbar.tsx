"use client";
import { Tabs, FloatingIndicator, Text, Flex } from "@mantine/core";
import {
    IconSparkles,
    IconMapRoute,
    IconBrandReact,
    IconUserQuestion,
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
        <Tabs.List grow ref={setRootRef} className={classes.list}>
            <Tabs.Tab
                value="home"
                ref={setControlRef("home")}
                className={classes.tab}
            >
                <Flex align="center" direction="column">
                    <IconSparkles size={20}/>
                    <Text fw={500} size="sm">
                        Home
                    </Text>
                </Flex>
            </Tabs.Tab>
            <Tabs.Tab
                value="experience"
                ref={setControlRef("experience")}
                className={classes.tab}
            >
                <Flex align="center" direction="column">
                    <IconMapRoute size={20}/>
                    <Text fw={500} size="sm">
                        Experience
                    </Text>
                </Flex>
            </Tabs.Tab>
            <Tabs.Tab
                value="projects"
                ref={setControlRef("projects")}
                className={classes.tab}
            >
                <Flex align="center" direction="column">
                    <IconBrandReact size={20}/>
                    <Text fw={500} size="sm">
                        Projects
                    </Text>
                </Flex>
            </Tabs.Tab>
            <Tabs.Tab
                value="about"
                ref={setControlRef("about")}
                className={classes.tab}
            >
                <Flex align="center" direction="column">
                    <IconUserQuestion size={20}/>
                    <Text fw={500} size="sm">
                        About
                    </Text>
                </Flex>
            </Tabs.Tab>

            <FloatingIndicator
                target={activeTab ? controlsRefs[activeTab] : null}
                parent={rootRef}
                className={classes.indicator}
                transitionDuration={300}
            />
        </Tabs.List>
    );
};
