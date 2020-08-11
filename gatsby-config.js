const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
    siteMetadata: {
        title: 'Jay Honnold',
        description: 'Jay Honnold\'s Portfolio and Website',
    },
    plugins: [
        'gatsby-plugin-eslint',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'honnold.me',
                short_name: 'starter',
                start_url: '/',
                background_color: fullConfig.theme.colors.white,
                theme_color: fullConfig.theme.colors.navy,
                display: 'minimal-ui',
                icon: 'src/images/icon.svg',
            },
        },
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [
                    require('tailwindcss')(tailwindConfig),
                    require('autoprefixer'),
                    ...(process.env.NODE_ENV === 'production' ? [require('cssnano')] : []),
                ],
            },
        },
        'gatsby-plugin-offline',
    ],
};
