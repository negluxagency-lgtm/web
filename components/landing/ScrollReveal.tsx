"use client";

import { useEffect } from "react";

export function ScrollReveal() {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.15,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-active");
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll(".reveal");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return null;
}
