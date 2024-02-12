/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
        'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
        'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'

    ],
    theme: {
        extend: {
            textColor: {
                primary: "rgb(var(--background-color-900) / <alpha-value>)",
                secondary: "rgb(var(--background-color-600) / <alpha-value>)",
            },
            backgroundColor: {
                surface: "rgb(var(--background-color-50) / <alpha-value>)",
                surface1: "rgb(var(--background-color-100) / <alpha-value>)",
                surface2: "rgb(var(--background-color-200) / <alpha-value>)",
                surface3: "rgb(var(--background-color-300) / <alpha-value>)",
                surface4: "rgb(var(--background-color-400) / <alpha-value>)",
                surface5: "rgb(var(--background-color-500) / <alpha-value>)",
            },
        }
    },
    plugins: [
           require('flowbite/plugin')
    ],
}

