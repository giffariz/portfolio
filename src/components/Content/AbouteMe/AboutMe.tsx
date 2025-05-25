import classes from "./AboutMe.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { TitleSection } from "@/components/TitleSection/TitleSection";
import { Badge, Box, Container, Grid, Group, SimpleGrid } from "@mantine/core";
import { IconQuote, IconSettings, IconTarget } from "@tabler/icons-react";

export const AboutMe = () => {
    const { t } = useLanguage();

    return (
        <>
            <TitleSection title1={t.about.title1} title2={t.about.title2} />
            <Container my="md" miw={"80dvw"}>
                <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: "xs", md: "md" }}>
                    <Box className={classes.boxAvatar}>
                        <Box
                            component="img"
                            src="/pic/aboutme.webp"
                            className={classes.avatar}
                        />
                        <Box className={classes.avatarGradient} />
                    </Box>
                    <Grid gutter={{ base: "xs", md: "md" }}>
                        <Grid.Col>
                            <Box className={classes.boxDesc}>
                                {t.about.motto}
                                <IconTarget className={classes.icon} />
                            </Box>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Box className={classes.boxDesc}>
                                <Group gap="xs">
                                    {t.about.techSkills.map((tech, index) => (
                                        <Badge
                                            key={index + 1}
                                            variant="light"
                                            color="blue"
                                            autoContrast
                                            className={classes.badge}
                                            display="flex"
                                            size="sm"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </Group>
                                <IconSettings className={classes.icon} />
                            </Box>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Box className={classes.boxDesc}>
                                {t.about.quote}
                                <IconQuote className={classes.icon} />
                            </Box>
                        </Grid.Col>
                    </Grid>
                </SimpleGrid>
            </Container>
        </>
    )
}
