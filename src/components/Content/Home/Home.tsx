import { useLanguage } from '@/context/LanguageContext';
import { Button, Container, Drawer, Text, Title } from '@mantine/core';
import classes from './Home.module.css';
import { useDisclosure } from '@mantine/hooks';
import { ContactCard } from '@/components/ContactCard/ContactCard';

interface IHomeProps {
    onClickProjects: () => void
}

export default function Home({ onClickProjects }: IHomeProps) {
    const { t } = useLanguage();
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Container className={classes.wrapper} size={1400}>
                <div className={classes.inner}>
                    <Title className={classes.title}>
                        {t.home.greeting}{","}
                        <br></br>
                        <Text
                            component="span"
                            className={classes.highlight}
                            inherit
                            variant="gradient"
                            gradient={{ from: 'blue', to: 'cyan' }}
                        >
                            {t.home.role}
                        </Text>
                    </Title>

                    <Container p={0} size={600}>
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
            >
                <ContactCard />
            </Drawer>
        </>
    );
}
