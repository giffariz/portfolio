import { useLanguage } from "@/context/LanguageContext";
import { TitleSection } from "@/components/TitleSection/TitleSection";
import { Title, Text, Group } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useState } from "react";
import classes from "./Projects.module.css";
import { useDisclosure } from "@mantine/hooks";
import { Detail } from "./Detail/Detail";

export const Projects = () => {
    const { t } = useLanguage();
    const [opened, { open, close }] = useDisclosure(false);
    const [selectedProject, setSelectedProject] =
        useState<(typeof t.projects.items)[number]>();

    const handleClick = (index: number) => {
        setSelectedProject(t.projects.items[index]);
        open();
    };

    return (
        <>
            <TitleSection title1={t.projects.title1} title2={t.projects.title2} />
            {t.projects.items.map((item, index) => (
                <Group mt="md" justify="space-between" w={"100%"} key={index + 1}>
                    <IconArrowUpRight
                        size={25}
                        stroke={4}
                        onClick={() => handleClick(index)}
                    />
                    <div style={{ textAlign: "right" }}>
                        <Title order={1} m={0} tt={"uppercase"}>
                            {item.name}
                        </Title>
                        <Text m={0} c="dimmed" className={classes.associate}>
                            {item.associate}
                        </Text>
                    </div>
                </Group>
            ))}
            <Detail
                opened={opened}
                close={close}
                btnBack={t.projects.back}
                selectedProject={selectedProject ?? undefined}
            />
        </>
    );
};
