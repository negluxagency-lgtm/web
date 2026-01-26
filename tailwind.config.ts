import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Aquí está la magia: conectamos la clase 'font-sans' a la variable --font-outfit
                sans: ["var(--font-outfit)", "sans-serif"],
                // Y creamos una nueva clase 'font-script' para la cursiva
                script: ["var(--font-great-vibes)", "cursive"],
            },
            colors: {
                // Aseguramos tus colores
                amber: {
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706',
                }
            }
        },
    },
    plugins: [],
};
export default config;
