import classes from "./AboutMe.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { TitleSection } from "@/components/TitleSection/TitleSection";
import {
    Badge,
    Box,
    Container,
    Drawer,
    Group,
    SimpleGrid,
    Stack,
    useMantineColorScheme,
    Text,
    Highlight,
} from "@mantine/core";
import { IconQuoteFilled, IconSend2 } from "@tabler/icons-react";
import { ContactCard } from "@/components/ContactCard/ContactCard";
import { useDisclosure } from "@mantine/hooks";
import TextPressure from "../../ReactBits/TextPressure/TextPressure";
import Waves from "@/components/ReactBits/Wave/Waves";
import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
    weight: "600",
    subsets: ["latin"],
});

export const AboutMe = () => {
    const { t } = useLanguage();
    const { colorScheme } = useMantineColorScheme();
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <TitleSection title1={t.about.title1} title2={t.about.title2} />
            <Container
                my={{ base: "md", md: "xl" }}
                w={{ base: "95dvw", md: "80dvw" }}
            >
                <SimpleGrid
                    cols={{ base: 1, md: 2 }}
                    spacing={{ base: "xs", md: "md" }}
                >
                    <div>
                        <Box className={classes.boxAvatar}>
                            <Box
                                component="img"
                                src="/pic/aboutme.webp"
                                className={classes.avatar}
                            />
                            <Box className={classes.avatarGradient} />
                        </Box>
                        <Group
                            className={classes.avatarButton}
                            onClick={open}
                            justify="center"
                            align="center"
                        >
                            <IconSend2 />
                        </Group>
                    </div>
                    <Stack p={"md"} className={classes.hello + " noSwipe"}>
                        <Waves
                            lineColor={colorScheme === "dark" ? "black" : "lightgray"}
                            waveSpeedX={0.02}
                            waveSpeedY={0.01}
                            waveAmpX={40}
                            waveAmpY={20}
                            friction={0.9}
                            tension={0.01}
                            maxCursorMove={120}
                            xGap={12}
                            yGap={36}
                        />
                        <TextPressure
                            text="Hello!"
                            flex={false}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={true}
                            italic={false}
                            textColor="currentColor"
                            className={classes.helloText}
                            minFontSize={40}
                        />
                    </Stack>
                </SimpleGrid>
                <Stack className={classes.quote} mt={{ base: "xs", md: "md" }}>
                    <Highlight
                        highlight={["not optional", "itu wajib"]}
                        highlightStyles={{
                            backgroundImage:
                                "linear-gradient(45deg, var(--mantine-color-blue-7), var(--mantine-color-cyan-6))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                        className={classes.quoteText + " " + leagueSpartan.className}
                        inherit
                    >
                        {t.about.quote.toLowerCase()}
                    </Highlight>
                    <Text component="span" c="dimmed" fz={"lg"} fw={400}>
                        {t.about.motto}
                    </Text>
                    <IconQuoteFilled className={classes.icon} />
                </Stack>
                <Stack className={classes.tech} mt={0} justify="center" align="center">
                    <Text component="span" c="dimmed" fz={"sm"} fw={600}>
                        TECH
                    </Text>
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
                </Stack>
            </Container>

            <Drawer
                className="noSwipe"
                position="bottom"
                opened={opened}
                onClose={close}
                transitionProps={{
                    transition: "slide-up",
                    duration: 300,
                    timingFunction: "ease",
                }}
                withCloseButton={false}
                overlayProps={{
                    style: {
                        backdropFilter: "blur(6px)",
                        WebkitBackdropFilter: "blur(6px)",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                    },
                }}
            >
                <ContactCard />
            </Drawer>
        </>
    );
};