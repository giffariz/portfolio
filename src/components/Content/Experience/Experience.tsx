import { useLanguage } from "@/context/LanguageContext";
import { Slider } from "./Slider/Slider";
import { TitleSection } from "@/components/TitleSection/TitleSection";

export default function ExperienceScrollWithDots() {
    const { t } = useLanguage();

    return (
        <>
            <TitleSection title1={t.experience.title1} title2={t.experience.title2} />
            <Slider />
        </>
    );
}
