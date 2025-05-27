"use client";
import {
    AspectRatio,
    Modal,
    Image,
    Button,
    Title,
    Text,
    Grid,
    Group,
    ActionIcon,
    Badge,
    Divider,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
    IconArrowBadgeLeftFilled,
    IconArrowBadgeRightFilled,
    IconArrowNarrowLeft,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

interface ProjectDetail {
    name: string;
    associate: string;
    description: string;
    tech: string[];
    imgUrl: string[];
}

interface DetailProps {
    opened: boolean;
    close: () => void;
    btnBack: string;
    selectedProject?: ProjectDetail;
}

export const Detail = (props: Readonly<DetailProps>) => {
    const isNotPc = useMediaQuery("(max-width: 64em)");

    const [index, setIndex] = useState(0);

    const handleNext = () => {
        return index + 1 === props.selectedProject?.imgUrl.length ? setIndex(0) : setIndex(index + 1);
    };

    const handlePrev = () => {
        return index - 1 < 0 ? setIndex(props.selectedProject!.imgUrl.length - 1) : setIndex(index - 1);
    };

    useEffect(() => {
        setIndex(0);
    }, [props.selectedProject]);

    return (
        <Modal
            opened={props.opened}
            onClose={props.close}
            fullScreen={isNotPc}
            size={"100%"}
            radius="xl"
            centered
            withCloseButton={false}
            transitionProps={{ transition: "fade", duration: 300 }}
            overlayProps={{
                style: {
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                },
            }}
        >
            <div style={{ justifyItems: "center" }}>
                <Title order={1} m={0} tt={"uppercase"} fw={900}>
                    {props.selectedProject?.name}
                </Title>
                <Text m={0} c="dimmed" size="sm" fw={600} mt={-5}>
                    {props.selectedProject?.associate}
                </Text>
            </div>
            <Grid
                mt={{ base: "md", md: "xl" }}
                w={{ base: "100%", lg: "80%" }}
                style={{ justifySelf: "center" }}
            >
                <Grid.Col span={{ base: 12, md: 8 }}>
                    <AspectRatio ratio={16 / 9}>
                        <Image w={"100%"} radius="md" src={props.selectedProject?.imgUrl[index]} alt="Project Img" />
                    </AspectRatio>
                    <Group justify="center" mt="xs" gap="xs">
                        <ActionIcon
                            onClick={handlePrev}
                            size={"md"}
                            radius={"xl"}
                            variant="gradient"
                            gradient={{ from: "blue", to: "cyan", deg: 90 }}
                        >
                            <IconArrowBadgeLeftFilled size={20} />
                        </ActionIcon>
                        {props.selectedProject?.imgUrl.map((_, i) => (
                            <Button
                                key={i + 1}
                                size="sm"
                                variant={i === index ? "gradient" : "default"}
                                gradient={
                                    i === index ? { from: "blue", to: "cyan" } : undefined
                                }
                                style={{ ...(i !== index && { padding: 0 }) }}
                                radius="xl"
                                onClick={() => setIndex(i)}
                                w={"10px"}
                                h={"10px"}
                                styles={{
                                    root: {
                                        transition: "all 0.3s ease-in-out",
                                    },
                                }}
                            />
                        ))}
                        <ActionIcon
                            onClick={handleNext}
                            size={"md"}
                            radius={"xl"}
                            variant="gradient"
                            gradient={{ from: "blue", to: "cyan", deg: 90 }}
                        >
                            <IconArrowBadgeRightFilled size={20} />
                        </ActionIcon>
                    </Group>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4 }}>
                    <Text size={isNotPc ? "md" : "xl"}>
                        {props.selectedProject?.description}
                    </Text>
                    <Divider size={"md"} my={"md"} />
                    {props.selectedProject?.tech.map((tech, index) => (
                        <Badge
                            key={index + 1}
                            color="blue"
                            variant="light"
                            size={isNotPc ? "lg" : "xl"}
                            mr={"xs"}
                            mb={"xs"}
                        >
                            {tech}
                        </Badge>
                    ))}
                </Grid.Col>
            </Grid>
            <Group justify="center" mt="xl" gap="xs">
                <Button
                    onClick={props.close}
                    size="sm"
                    radius={"xl"}
                    variant="gradient"
                    gradient={{ from: "blue", to: "cyan", deg: 90 }}
                    leftSection={<IconArrowNarrowLeft size={20} />}
                >
                    {props.btnBack}
                </Button>
            </Group>
        </Modal>
    );
};