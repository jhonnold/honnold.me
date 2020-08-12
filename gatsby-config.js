const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
    siteMetadata: {
        title: 'Jay Honnold',
        description: "Jay Honnold's Portfolio and Website",
        about:
            'I am a full-stack developer with experience in React, Spring, Express, Rails, and SQL databases. Throughout my career I have designed, built, and maintained different projects, utilizing the agile framework.',
        links: {
            github: 'https://github.com/jhonnold',
            linkedin: 'https://google.com',
        },
        experience: [
            {
                title: 'Full-Stack Developer',
                company: 'Allstate',
                start: 'March 2019',
                end: 'Present',
                details: 'Working with Java, Spring, Node, Express, Javascript, React, Redux, and MSSQL',
            },
            {
                title: 'Full-Stack Developer',
                company: 'Coder Inc.',
                start: 'June 2017',
                end: 'August 2018',
                details:
                    'Three year old startup that assists entrepreneurs in achieving their goals through assistance in product development and business strategy. Developed the android application for Victor, a mobile tool for veterans. Used react-native and redux for the application, and ruby on rails for the backend. In addition, developed “Coder Platform” that allows non-technical users to interface with developers in a more efficient manner. Used react and redux for the web application, and ruby on rails for the backend. Architected a new version of the “Coder Platform,” setting up the PostgreSQL database and backend with express/node.',
            },
            {
                title: 'Software Consultant',
                company: 'Burtch Works',
                start: 'May 2017',
                end: 'June 2017',
                details:
                    'Assisted with the migration to a new applicant tracking system. Evaluated 15 different ATS’ for ease- of-use, functionality, flexibility, service record, and back-end design.',
            },
            {
                title: 'Web Developer',
                company: 'Flash Dealer LLC',
                start: 'June 2013',
                end: 'August 2013',
                details:
                    'Developed new website for firm selling branded flash drives. Modified firm’s CRM system to work with the new website and automatically generate sales reports. Built with HTML, CSS, and vanilla javascript.',
            },
        ],
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
                icon: 'src/images/icon.webp',
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
