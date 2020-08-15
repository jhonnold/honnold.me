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
        minHeight: {
            215: '215px',
        }
    },
    variants: {},
    plugins: [],
};
