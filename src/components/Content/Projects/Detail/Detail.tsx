"use client";
import {
    Modal,
    Button,
    Title,
    Text,
    Badge,
    Affix,
    Card,
    Image,
    Group,
    Stack,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconArrowNarrowLeft, IconLibraryPhoto } from "@tabler/icons-react";
import classes from "./Detail.module.css";
import { PhotoSlider } from "react-photo-view";
import { DataType } from "react-photo-view/dist/types";

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

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <Modal
            className="noSwipe"
            opened={props.opened}
            onClose={props.close}
            fullScreen
            closeOnEscape={false}
            withCloseButton={false}
            transitionProps={{ transition: "slide-up", duration: 200 }}
        >
            <PhotoSlider
                images={
                    props.selectedProject?.imgUrl.map((item) => ({
                        src: item,
                        key: item,
                    })) as DataType[]
                }
                visible={opened}
                onClose={close}
                className="noSwipe"
            />

            <div style={{ textAlign: "center" }}>
                <Title order={1} m={0} tt={"uppercase"} fw={900}>
                    {props.selectedProject?.name}
                </Title>
                <Text m={0} c="dimmed" size="sm" fw={600} mt={-5}>
                    {props.selectedProject?.associate}
                </Text>
            </div>
            <Stack
                align="flex-end"
                mb="80px"
                w={{ base: "90dvw", md: "40dvw" }}
                style={{ justifySelf: "center" }}
                mt={{ base: "md", md: "xl" }}
            >
                <Group
                    className={classes.cardButton}
                    align="center"
                    justify="center"
                    onClick={open}
                >
                    <IconLibraryPhoto />
                </Group>
                <Card
                    w={{ base: "90dvw", md: "40dvw" }}
                    shadow="md"
                    padding="md"
                    withBorder
                    className={classes.card}
                >
                    <Card.Section withBorder>
                        <Image
                            src={props.selectedProject?.imgUrl[0]}
                            alt={props.selectedProject?.name + " image"}
                            fit="cover"
                        />
                    </Card.Section>
                    <Card.Section p="md" withBorder>
                        <Text size={isNotPc ? "md" : "xl"}>
                            {props.selectedProject?.description}
                        </Text>
                    </Card.Section>
                    <Card.Section p="md">
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
                    </Card.Section>
                </Card>
            </Stack>
            <Affix
                position={{ bottom: 0, right: 0 }}
                w={"100%"}
                h={"60px"}
                style={{ alignContent: "center" }}
                bg={
                    "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))"
                }
            >
                <Button
                    onClick={props.close}
                    size="sm"
                    radius={"xl"}
                    variant="gradient"
                    gradient={{ from: "blue", to: "cyan", deg: 90 }}
                    leftSection={<IconArrowNarrowLeft size={20} />}
                    style={{
                        display: props.opened ? "flex" : "none",
                        justifySelf: "flex-end",
                        marginRight: "1rem",
                    }}
                >
                    {props.btnBack}
                </Button>
            </Affix>
        </Modal>
    );
};