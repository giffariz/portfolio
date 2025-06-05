import { useLanguage } from "@/context/LanguageContext";
import { TitleSection } from "@/components/TitleSection/TitleSection";
import { Title, Text, Group, Card, Container } from "@mantine/core";
import { IconRocket } from "@tabler/icons-react";
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
            <div className={classes.card}>
                {t.projects.items.map((item, index) => (
                    <Container key={index + 1} w={{ base: "95dvw", md: "50dvw" }}>
                        <IconRocket size={40} className={classes.icondetail} />
                        <Card
                            key={index + 1}
                            shadow="md"
                            radius="md"
                            p={0}
                            className={classes.innerradius}
                        >
                            <Group
                                justify="flex-end"
                                className={classes.item}
                                onClick={() => handleClick(index)}
                            >
                                <div style={{ textAlign: "right" }}>
                                    <Title order={1} m={0} tt={"uppercase"}>
                                        {item.name}
                                    </Title>
                                    <Text m={0} c="dimmed" className={classes.associate}>
                                        {item.associate}
                                    </Text>
                                </div>
                            </Group>
                        </Card>
                    </Container>
                ))}
            </div>
            <Detail
                opened={opened}
                close={close}
                btnBack={t.projects.back}
                selectedProject={selectedProject ?? undefined}
            />
        </>
    );
};
