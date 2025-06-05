"use client";
import { Center } from "@mantine/core";
import { useEffect, useState } from "react";
import classes from "./Loader.module.css";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

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

  if (loading)
    return (
      <Center className={classes.loadContainer}>
        <Logo animate size={200}/>
      </Center>
    );

  return null;
};
