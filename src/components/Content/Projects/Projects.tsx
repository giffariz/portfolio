// import classes from "./Projects.module.css"
import { useLanguage } from "@/context/LanguageContext";
import { TitleSection } from "@/components/TitleSection/TitleSection";

export const Projects = () => {
    const { t } = useLanguage();

    return (
        <TitleSection title1={t.projects.title1} title2={t.projects.title2} />
    )
}
