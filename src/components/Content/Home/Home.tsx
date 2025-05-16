import { useLanguage } from '@/context/LanguageContext';
import { Button, Container, Drawer, Text, Title } from '@mantine/core';
import classes from './Home.module.css';
import { useDisclosure } from '@mantine/hooks';
import { ContactCard } from '@/components/ContactCard/ContactCard';
import { Rock_Salt, League_Spartan } from 'next/font/google';
import { IconCode, IconUsers } from '@tabler/icons-react';

interface IHomeProps {
    onClickProjects: () => void
}

const rockSalt = Rock_Salt({
    weight: "400",
    subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
    weight: "900",
    subsets: ["latin"],
});

export default function Home({ onClickProjects }: Readonly<IHomeProps>) {
    const { t } = useLanguage();
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Container className={classes.wrapper} size={"lg"}>
                <div className={classes.inner}>
                    <Title className={classes.title} w={"100%"}>
                        <Text
                            component="span"
                            className={classes.highlight + " " + leagueSpartan.className}
                            inherit
                            variant="gradient"
                            gradient={{ from: 'blue', to: 'cyan' }}
                        >
                            {t.home.greeting}
                        </Text><br />
                        <Text
                            component="span"
                            className={classes.highlight + " " + rockSalt.className}
                            inherit
                        >
                            Frontend Developer
                        </Text>
                    </Title>

                    <Container p={0} size={600} mt={30}>
                        <Text size="lg" c="dimmed" className={classes.description}>
                            {t.home.shortDescription}
                        </Text>
                    </Container>

                    <div className={classes.controls}>
                        <Button
                            className={classes.control}
                            size="lg"
                            radius={"xl"}
                            variant="default"
                            color="gray"
                            onClick={onClickProjects}
                        >
                            View Projects
                            <IconCode
                                size={64}
                                style={{
                                    position: 'absolute',
                                    right: -24,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    opacity: 0.1,
                                    pointerEvents: 'none',
                                }}
                            />
                        </Button>
                        <Button
                            className={classes.control}
                            size="lg"
                            radius={"xl"}
                            onClick={open}
                            variant="gradient"
                            gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                        >
                            Profile Card
                            <IconUsers
                                size={64} // besar banget!
                                style={{
                                    position: 'absolute',
                                    right: -24,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    opacity: 0.2, // opsional: biar kayak watermark
                                    pointerEvents: 'none',
                                }}
                            />
                        </Button>
                    </div>
                </div>
            </Container>

            <Drawer
                position="bottom"
                opened={opened}
                onClose={close}
                transitionProps={{
                    transition: "slide-up",
                    duration: 500,
                    timingFunction: "ease",
                }}
                withCloseButton={false}
                overlayProps={{
                    style: {
                        backdropFilter: 'blur(6px)',
                        WebkitBackdropFilter: 'blur(6px)',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    },
                }}
            >
                <ContactCard />
            </Drawer>
        </>
    );
}
