import { Flex, Tabs, Transition } from "@mantine/core";
import React from "react";
import Home from "./Home/Home";
import { Dots } from "../Dot/Dots";
import Experience from "./Experience/Experience";

interface IContentProps {
    onClickProjects: () => void;
    activeTab: string | null;
}

export const Content = ({ onClickProjects, activeTab }: IContentProps) => {
    return (
        <>
            <Dots />
            <Tabs.Panel value="home">
                <Transition mounted={activeTab === "home"} transition="fade" duration={400}>
                    {(styles) => (
                        <Flex
                            justify="center"
                            align="center"
                            h="80dvh"
                        >
                            <div style={styles}>
                                <Home onClickProjects={onClickProjects} />
                            </div>
                        </Flex>
                    )}
                </Transition>
            </Tabs.Panel>
            <Tabs.Panel value="experience">
                <Transition mounted={activeTab === "experience"} transition="fade" duration={400}>
                    {(styles) => (
                        <div style={styles}>
                            <Experience />
                        </div>
                    )}
                </Transition>
            </Tabs.Panel>
            <Tabs.Panel value="projects">
                <Transition mounted={activeTab === "projects"} transition="fade" duration={400}>
                    {(styles) => (
                        <div style={styles}>
                            PROJECTS
                        </div>
                    )}
                </Transition>
            </Tabs.Panel>
            <Tabs.Panel value="about">
                <Transition mounted={activeTab === "about"} transition="fade" duration={400}>
                    {(styles) => (
                        <div style={styles}>
                            ABOUT ME
                        </div>
                    )}
                </Transition>
            </Tabs.Panel>
        </>
    );
};
