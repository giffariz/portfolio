import { useLanguage } from "@/context/LanguageContext";
import { ActionIcon, List, Popover, Stack, Text } from "@mantine/core";
import {
    IconDeviceImac,
    IconDeviceMobile,
    IconHandMove,
    IconProgressHelp,
} from "@tabler/icons-react";
import classes from "./Tooltip.module.css";

export default function Tooltip() {
    const { t } = useLanguage();
    return (
        <Popover
            width={200}
            position="bottom-end"
            offset={15}
            withOverlay
            overlayProps={{ zIndex: 10000, blur: "8px" }}
            zIndex={10001}
        >
            <Popover.Target>
                <ActionIcon
                    variant="default"
                    size="xl"
                    aria-label="Toggle Language"
                    radius={"xl"}
                >
                    <IconProgressHelp stroke={1.5} />
                </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown>
                <Stack align="center" justify="center">
                    <IconHandMove size={50} className={classes.icon}/>
                    <Text size="xs" c={"dimmed"}>
                        {t.tooltip.instruction}
                    </Text>
                    <List fz={"sm"} spacing={"xs"}>
                        <List.Item icon={<IconDeviceMobile />}>
                            {t.tooltip.mobile}
                        </List.Item>
                        <List.Item icon={<IconDeviceImac />}>{t.tooltip.desktop}</List.Item>
                    </List>
                    <Text size="xs" c={"dimmed"}>
                        {t.tooltip.all}
                    </Text>
                </Stack>
            </Popover.Dropdown>
        </Popover>
    );
}
