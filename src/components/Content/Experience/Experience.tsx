import { useLanguage } from "@/context/LanguageContext";
import { Text, Title } from "@mantine/core";
import { League_Spartan, Rock_Salt } from "next/font/google";
import classes from "./Experience.module.css";
import { Slider } from "./Slider/Slider";

const leagueSpartan = League_Spartan({
    weight: "600",
    subsets: ["latin"],
});

const rockSalt = Rock_Salt({
    weight: "400",
    subsets: ["latin"],
});

export default function ExperienceScrollWithDots() {
    const { t } = useLanguage();

    return (
        <>
            <Title className={classes.title}>
                <Text
                    component="span"
                    className={classes.highlight + " " + leagueSpartan.className}
                    inherit
                >
                    {t.experience.title1}
                </Text>
                <br />
                <Text
                    component="span"
                    className={classes.highlight + " " + rockSalt.className}
                    inherit
                    variant="gradient"
                    gradient={{ from: "blue", to: "cyan" }}
                >
                    {t.experience.title2}
                </Text>
            </Title>
            <Slider />
        </>
    );
}
