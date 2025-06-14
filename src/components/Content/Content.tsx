import { Flex, Tabs, Transition } from "@mantine/core";
import Home from "./Home/Home";
import { Dots } from "../Dot/Dots";
import Experience from "./Experience/Experience";
import { AboutMe } from "./AbouteMe/AboutMe";
import { Projects } from "./Projects/Projects";

interface IContentProps {
    onClickProjects: () => void;
    activeTab: string | null;
}

export const Content = ({ onClickProjects, activeTab }: IContentProps) => {
    return (
        <>
            <Dots />
            <Tabs.Panel value="home">
                <Transition
                    mounted={activeTab === "home"}
                    transition="fade"
                    duration={300}
                >
                    {(styles) => (
                        <Flex justify="center">
                            <div style={styles}>
                                <Home onClickProjects={onClickProjects} />
                            </div>
                        </Flex>
                    )}
                </Transition>
            </Tabs.Panel>
            <Tabs.Panel value="experience">
                <Transition
                    mounted={activeTab === "experience"}
                    transition="fade"
                    duration={300}
                >
                    {(styles) => (
                        <Flex justify="center">
                            <div style={styles}>
                                <Experience />
                            </div>
                        </Flex>
                    )}
                </Transition>
            </Tabs.Panel>
            <Tabs.Panel value="projects">
                <Transition
                    mounted={activeTab === "projects"}
                    transition="fade"
                    duration={300}
                >
                    {(styles) => (
                        <Flex justify="center">
                            <div style={styles}>
                                <Projects />
                            </div>
                        </Flex>
                    )}
                </Transition>
            </Tabs.Panel>
            <Tabs.Panel value="about">
                <Transition
                    mounted={activeTab === "about"}
                    transition="fade"
                    duration={300}
                >
                    {(styles) => (
                        <Flex justify="center">
                            <div style={styles}>
                                <AboutMe />
                            </div>
                        </Flex>
                    )}
                </Transition>
            </Tabs.Panel>
        </>
    );
};
