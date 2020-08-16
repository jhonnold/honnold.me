const defaultTheme = require('tailwindcss/defaultTheme');

const colors = {
    white: '#fafafa',
    gold: '#ffac00',
    navy: '#011c27',
};

module.exports = {
    purge: ['./src/**/*.{js,jsx}'],
    theme: {
        ...colors,
        backgroundColor: colors,
        textColor: colors,
        extend: {
            fontFamily: {
                sans: ['Lato', ...defaultTheme.fontFamily.sans],
            },
            minHeight: {
                215: '215px',
            },
        },
    },
    variants: {},
    plugins: [],
};
