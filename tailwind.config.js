module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                alert: {
                    "0%": { transform: "translateX(100%)", opacity: 0 },
                    "100%": { transform: "translateX(0%)", opacity: 1 },
                },
                scrolltotop: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                qualifications: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                front: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                heading: {
                    "0%": { transform: "translateY(-100%)", opacity: 0 },
                    "100%": { transform: "translateY(0%)", opacity: 1 },
                },
                linkDescription: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
