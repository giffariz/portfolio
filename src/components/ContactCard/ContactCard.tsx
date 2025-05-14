import { Avatar, Button, Card, Group, Text } from '@mantine/core';
import classes from './ContactCard.module.css';
import { IconBrandGithubFilled, IconBrandInstagramFilled, IconBrandLinkedinFilled } from '@tabler/icons-react';
import { useLanguage } from '@/context/LanguageContext';

export function ContactCard() {
    const { t } = useLanguage();
    
    return (
        <Card className={classes.card}>
            <Card.Section h={40} />
            <Avatar
                src="./Avatar.jpg"
                size={100}
                radius={80}
                mx="auto"
                mt={-30}
                className={classes.avatar}
            />
            <Text ta="center" fz="lg" fw={600} mt="sm">
                Giffari Zakawaly
            </Text>
            <Text ta="center" fz="sm" c="dimmed">
                Frontend Developer
            </Text>
            <Group mt="md" justify="center" gap={10}>
                <a href='https://github.com/giffariz' target="_blank">
                    <IconBrandGithubFilled size={28} />
                </a>
                <a href='https://www.linkedin.com/in/giffariz/' target="_blank">
                    <IconBrandLinkedinFilled size={28} />
                </a>
                <a href='https://www.instagram.com/gif.agiff/' target="_blank">
                    <IconBrandInstagramFilled size={28} />
                </a>
            </Group>
            <Button
                radius="xl"
                mt="xl"
                size="md"
                variant="default"
                className={classes.button}
                component="a"
                target="_blank"
                href="/CV_Giffari.pdf"
                rel="noopener noreferrer"
                // download
            >
                {t.card.cv}
            </Button>
            <Button
                radius="xl"
                mt="xs"
                size="md"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                className={classes.button}
                component="a"
                href="mailto:giffarizz@gmail.com?subject=Project%20Proposal"
            >
                {t.card.email}
            </Button>
        </Card>
    );
}