import { ActionIcon, Text  } from '@mantine/core';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSelector() {
    const { lang, setLang } = useLanguage();

    return (
        <ActionIcon
            onClick={() =>
                setLang(lang === "en" ? "id" : "en")
            }
            variant="default"
            size="xl"
            aria-label="Toggle Language"
            radius={"xl"}
        >
            <Text size='xs' fw={500}>
                {lang === "en" ? "ID" : "EN"}
            </Text>
        </ActionIcon>
    );
}
