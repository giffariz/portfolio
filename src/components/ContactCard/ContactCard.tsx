import { Avatar, Button, Card, Group, Text } from "@mantine/core";
import classes from "./ContactCard.module.css";
import {
    IconBrandGithubFilled,
    IconBrandInstagramFilled,
    IconBrandLinkedinFilled,
    IconBulb,
    IconEye,
} from "@tabler/icons-react";
import { useLanguage } from "@/context/LanguageContext";

export function ContactCard() {
    const { t } = useLanguage();

    return (
        <Card className={classes.card}>
            <Avatar
                src="./Avatar.jpg"
                size={120}
                radius={80}
                mx="auto"
                className={classes.avatar}
            />
            <Text ta="center" fz="lg" fw={700} mt="sm">
                Giffari Zakawaly
            </Text>
            <Text ta="center" fz="sm" c="dimmed">
                Frontend Developer
            </Text>
            <Group mt="md" justify="center" gap={10}>
                <a href="https://github.com/giffariz" target="_blank">
                    <IconBrandGithubFilled size={28} />
                </a>
                <a href="https://www.linkedin.com/in/giffariz/" target="_blank">
                    <IconBrandLinkedinFilled size={28} />
                </a>
                <a href="https://www.instagram.com/gif.agiff/" target="_blank">
                    <IconBrandInstagramFilled size={28} />
                </a>
            </Group>
            <Button
                radius="xl"
                mt="md"
                size="md"
                variant="default"
                className={classes.button}
                component="a"
                target="_blank"
                href="/CV_Giffari.pdf"
                rel="noopener noreferrer"
            >
                {t.card.cv}
                <IconEye
                    size={64}
                    style={{
                        position: "absolute",
                        right: -24,
                        top: "50%",
                        transform: "translateY(-50%)",
                        opacity: 0.1,
                        pointerEvents: "none",
                    }}
                />
            </Button>
            <Button
                radius="xl"
                mt="xs"
                size="md"
                variant="gradient"
                gradient={{ from: "blue", to: "cyan", deg: 90 }}
                className={classes.button}
                component="a"
                href="mailto:giffarizz@gmail.com?subject=Project%20Proposal"
            >
                {t.card.email}
                <IconBulb
                    size={64}
                    style={{
                        position: "absolute",
                        right: -24,
                        top: "50%",
                        transform: "translateY(-50%)",
                        opacity: 0.2,
                        pointerEvents: "none",
                    }}
                />
            </Button>
        </Card>
    );
}
