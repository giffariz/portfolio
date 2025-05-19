"use client";
import { Center, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import classes from "./Loader.module.css";
import { usePathname } from "next/navigation";


export const Loader = () => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (loading) return (
    <Center className={classes.loadContainer}>
      <Stack align="center" justify="center">
        <div className={classes.loader} style={{ scale: "2" }} />
        <Text size={"lg"} fw={500}>
          Waking up...
        </Text>
      </Stack>
    </Center>
  );

  return null;
};
