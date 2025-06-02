import { useEffect, useRef, useState } from "react";

const tabs = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About Me" },
];
export const useSwipeHandler = () => {
    const [activeTab, setActiveTab] = useState<string | null>("home");

    //Mobile Handler
    const touchStartX = useRef<number>(0);
    const touchStartY = useRef<number>(0);

    const handleTouchStart = (e: TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest(".noSwipe")) return;

        if (!touchStartX.current || !touchStartY.current) return;

        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;

        const diffX = touchStartX.current - touchEndX;
        const diffY = touchStartY.current - touchEndY;

        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 20) {
            const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);

            if (diffX > 0 && currentIndex < tabs.length - 1) {
                setActiveTab(tabs[currentIndex + 1].id);
            } else if (diffX < 0 && currentIndex > 0) {
                setActiveTab(tabs[currentIndex - 1].id);
            }
        }

        touchStartX.current = 0;
        touchStartY.current = 0;
    };

    //Desktop Handler
    const lastWheelTime = useRef<number>(0);
    const wheelCooldown = 200;

    const handleWheel = (e: WheelEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest(".noSwipe")) return;

        const now = Date.now();

        if (now - lastWheelTime.current < wheelCooldown) return;

        const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
        const isShiftScroll = e.shiftKey && Math.abs(e.deltaY) > 0;

        if (isHorizontalScroll || isShiftScroll) {
            e.preventDefault();
            const delta = isHorizontalScroll ? e.deltaX : e.deltaY;
            const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);

            if (Math.abs(delta) > 10) {
                if (delta > 0 && currentIndex < tabs.length - 1) {
                    setActiveTab(tabs[currentIndex + 1].id);
                    lastWheelTime.current = now;
                } else if (delta < 0 && currentIndex > 0) {
                    setActiveTab(tabs[currentIndex - 1].id);
                    lastWheelTime.current = now;
                }
            }
        }
    };

    //Event Listeners
    useEffect(() => {
        const handleStart = (e: TouchEvent) => handleTouchStart(e);
        const handleEnd = (e: TouchEvent) => handleTouchEnd(e);

        document.addEventListener("touchstart", handleStart, { passive: true });
        document.addEventListener("touchend", handleEnd, { passive: true });

        return () => {
            document.removeEventListener("touchstart", handleStart);
            document.removeEventListener("touchend", handleEnd);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab]);

    useEffect(() => {
        const handleWheelEvent = (e: WheelEvent) => handleWheel(e);

        document.addEventListener("wheel", handleWheelEvent, { passive: false });

        return () => {
            document.removeEventListener("wheel", handleWheelEvent);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab]);

    return {
        activeTab,
        setActiveTab,
    };
};
