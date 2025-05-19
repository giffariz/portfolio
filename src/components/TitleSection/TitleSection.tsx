import classes from "./TitleSection.module.css"
import { League_Spartan, Rock_Salt } from "next/font/google";
import { Title, Text } from "@mantine/core";

const leagueSpartan = League_Spartan({
    weight: "600",
    subsets: ["latin"],
});

const rockSalt = Rock_Salt({
    weight: "400",
    subsets: ["latin"],
});

interface ITitleSectionProps {
    title1: string;
    title2: string;
}

export const TitleSection = ({ title1, title2 }: ITitleSectionProps) => {

    return (
        <Title className={classes.title}>
            <Text
                component="span"
                className={classes.highlight + " " + leagueSpartan.className}
                inherit
            >
                {title1}
            </Text>
            <br />
            <Text
                component="span"
                className={classes.highlight + " " + rockSalt.className}
                inherit
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
            >
                {title2}
            </Text>
        </Title>
    )
}
