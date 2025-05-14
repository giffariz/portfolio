import { Tabs } from "@mantine/core";
import React from "react";
import Home from "./Home/Home";
import { Dots } from "../Dot/Dots";

interface IContentProps {
    onClickProjects: () => void;
}

export const Content = ({ onClickProjects }: IContentProps) => {
    return (
        <>
            <Dots />
            <Tabs.Panel value="home">
                <Home onClickProjects={onClickProjects} />
            </Tabs.Panel>
            <Tabs.Panel value="experience">EXP</Tabs.Panel>
            <Tabs.Panel value="projects">PROJECT</Tabs.Panel>
            <Tabs.Panel value="about">ABOUT ME</Tabs.Panel>
        </>
    );
};
