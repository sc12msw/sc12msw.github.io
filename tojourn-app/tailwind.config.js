module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: () => ({
                nordic: "url('/img/pexels-tobias-bjørkli-2147318.jpg');",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
