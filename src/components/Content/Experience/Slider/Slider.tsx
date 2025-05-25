"use client";
import { useLanguage } from '@/context/LanguageContext';
import { ScrollArea, Card, Divider, Badge, List, Group, Button, Text } from '@mantine/core'
import { useEffect, useRef, useState } from 'react'
import classes from './Slider.module.css'

export const Slider = () => {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToIndex = (index: number) => {
        const container = containerRef.current;
        if (!container) return;

        const card = container.children[index] as HTMLElement;
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', inline: 'start' });
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handler = () => {
            const scrollLeft = container.scrollLeft;
            const cardWidth = container.clientWidth * 0.8 + 16;
            const index = Math.round(scrollLeft / cardWidth);
            setActiveIndex(index);
        };

        container.addEventListener('scroll', handler);
        return () => container.removeEventListener('scroll', handler);
    }, []);

    return (
        <>
            <ScrollArea
                type="never"
                scrollHideDelay={0}
                scrollbarSize={1}
                className={classes.scrollArea}
            >
                <div
                    ref={containerRef}
                    className={classes.carouselWrapper}
                >
                    {t.experience.items.map((exp, index) => (
                        <Card
                            key={index + 1}
                            className={classes.card}
                        >
                            <Text className={classes.company}>{exp.company}</Text>

                            <Text c="dimmed" className={classes.period}>
                                {exp.period}
                            </Text>
                            <Divider
                                my="xs"
                                labelPosition="left"
                                label={
                                    <Badge autoContrast color="blue" variant="light" className={classes.badge}>
                                        {exp.role}
                                    </Badge>
                                }
                                size="xl"
                            />
                            <List >
                                {exp.responsibilty.map((responsibilty, index) => (
                                    <List.Item key={index + 1} pb={3} pr={15}>
                                        <Text className={classes.responsibilty} >{responsibilty}</Text>
                                    </List.Item>
                                ))}
                            </List>
                            <Divider
                                my="xs"
                                labelPosition="left"
                                label={
                                    <Badge autoContrast color="blue" variant="light" className={classes.badge}>
                                        Tech Stack
                                    </Badge>
                                }
                                size="xl"
                            />
                            <Group gap="xs">
                                {exp.techStack.map((tech, index) => (
                                    <Badge
                                        key={index + 1}
                                        variant="default"
                                        className={classes.badge}
                                        display="flex"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </Group>
                        </Card>
                    ))}
                </div>
            </ScrollArea>
            <Group justify="center" mt="xs" gap="xs">
                {t.experience.items.map((_, i) => (
                    <Button
                        key={i + 1}
                        size="sm"
                        variant={i === activeIndex ? 'gradient' : 'default'}
                        gradient={i === activeIndex ? { from: 'blue', to: 'cyan' } : undefined}
                        style={{ ...(i !== activeIndex && { padding: 0 }) }}
                        radius="xl"
                        onClick={() => scrollToIndex(i)}
                        className={classes.indicator}
                    />
                ))}
            </Group>
        </>
    )
}
