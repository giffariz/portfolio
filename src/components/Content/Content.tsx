import { Tabs } from '@mantine/core'
import React from 'react'

export const Content = () => {
    return (
        <>
            <Tabs.Panel value="home">HOME</Tabs.Panel>
            <Tabs.Panel value="experience">EXP</Tabs.Panel>
            <Tabs.Panel value="projects">PROJECT</Tabs.Panel>
            <Tabs.Panel value="about">ABOUT ME</Tabs.Panel>
        </>
    )
}
