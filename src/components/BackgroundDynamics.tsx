"use client";

import { useEffect, useRef } from "react";

export const BackgroundDynamics = () => {
  useEffect(() => {
    const root = document.documentElement;

    const handlePointer = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      root.style.setProperty("--grad-x", x.toString());
      root.style.setProperty("--grad-y", y.toString());
    };

    const handleScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
      root.style.setProperty("--grad-scroll", scrolled.toString());
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    handlePointer(new PointerEvent("pointermove", { clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 }));
    handleScroll();

    return () => {
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

export default BackgroundDynamics;
