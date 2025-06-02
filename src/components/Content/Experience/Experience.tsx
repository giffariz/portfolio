import { useLanguage } from "@/context/LanguageContext";
import { TitleSection } from "@/components/TitleSection/TitleSection";
import {
    Timeline,
    Text,
    Card,
    Group,
    Image,
    Flex,
    Badge,
    Accordion,
    List,
    ThemeIcon,
} from "@mantine/core";
import classes from "./Experience.module.css";

export default function ExperienceScrollWithDots() {
    const { t } = useLanguage();

    return (
        <>
            <TitleSection title1={t.experience.title1} title2={t.experience.title2} />
            <Timeline active={-1} lineWidth={6} my="lg">
                {t.experience.items.map((item, index) => (
                    <Timeline.Item
                        key={index + 1}
                        bullet={
                            <ThemeIcon
                                size={22}
                                variant="gradient"
                                gradient={{ from: "blue", to: "cyan" }}
                                radius="xl"
                            />
                        }
                    >
                        <Card shadow="md" radius="md" withBorder>
                            <Card.Section p={"md"}>
                                <Flex justify="space-between" align="center" gap={20}>
                                    <Text className={classes.company}>{item.company}</Text>
                                    <Image
                                        src={item.imgurl}
                                        alt={item.company + " logo"}
                                        className={classes.image}
                                    />
                                </Flex>
                            </Card.Section>
                            <Card.Section className={classes.responsibilitySection}>
                                <Accordion variant="filled" className={classes.responsibilitySection}>
                                    <Accordion.Item value="detail">
                                        <Accordion.Control className={classes.responsibilitySection}>
                                            <Text className={classes.role}>{item.role}</Text>
                                            <Text c="dimmed" className={classes.period}>
                                                {item.period}
                                            </Text>
                                        </Accordion.Control>
                                        <Accordion.Panel className={classes.responsibilitySection}>
                                            <List>
                                                {item.responsibilty.map((responsibilty, index) => (
                                                    <List.Item key={index + 1} pb={3} pr={15}>
                                                        <Text className={classes.responsibilty}>
                                                            {responsibilty}
                                                        </Text>
                                                    </List.Item>
                                                ))}
                                            </List>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Section>
                            <Card.Section p={"md"}>
                                <Group gap="xs">
                                    {item.techStack.map((tech, index) => (
                                        <Badge key={index + 1} variant="light" color="blue">
                                            {tech}
                                        </Badge>
                                    ))}
                                </Group>
                            </Card.Section>
                        </Card>
                    </Timeline.Item>
                ))}
            </Timeline>
        </>
    );
}
