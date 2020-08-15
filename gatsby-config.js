const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
    siteMetadata: {
        title: 'Jay Honnold',
        description: "Jay Honnold's Portfolio and Website",
        about:
            "I am a full-stack developer with experience working in multiple web and backend frameworks. Throughout my career I have designed, built, and maintained many different projects. Being thorough in nature, I'm determined to write code that is elegant, maintainable, and secure.",
        specific:
            "Specifically, I have worked a majority of my frontend career in React, though Vue and Svelte seem quite interesting to me. On the backend I have worked equals parts in Spring and Express in combination with many different SQL databases. I'm always interested in learning more and welcome the idea of trying something new!",
        links: {
            github: 'https://github.com/jhonnold',
            linkedin: 'https://www.linkedin.com/in/jay-honnold-123275140/',
        },
        experience: [
            {
                title: 'Full-Stack Developer',
                company: 'Allstate',
                start: 'March 2019',
                end: 'Present',
                details:
                    'Developed an internal product which automatically collects relavant risk and security information on application artifacts and determines production deployment readiness. Refactored the API from a single codebase into multiple microservices. Rewrote the UI to meet accessiblity standards and present collected data in a clear and concise manner. Used React, JS, Java, Spring, Node, Express, and MSSQL.',
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
        works: [
            {
                title: 'FN Dash',
                stack: ['devicon-python-plain', 'devicon-react-original', 'devicon-postgresql-plain'],
                image: 'fndash.png',
                description: 'Fortnite statistics tracking website. Data collection is automatic upon registration.',
                href: 'https://fndash.honnold.me',
            },
            {
                title: '@jhonnold/react-chart.js',
                stack: ['devicon-react-original'],
                image: 'chartjs.png',
                description: 'React wrapper for the popular Chart.js library.',
                href: 'https://jhonnold.github.io/react-chart.js/#/',
            },

            {
                title: 'Coder Website',
                stack: [
                    'devicon-javascript-plain',
                    'devicon-sass-original',
                    'devicon-html5-plain',
                    'devicon-foundation-plain',
                ],
                image: 'coder-website.png',
                description: 'Main website for Coder Inc.',
                href: 'https://codernetwork.io/',
            },
            {
                title: 'Coder Platform',
                stack: ['devicon-rails-plain', 'devicon-react-original', 'devicon-postgresql-plain'],
                description: 'Backlog tool that brings clients closer to projects by reporting out progress live.',
                image: 'coder-platform.png',
            },
            {
                title: 'Blogging Site',
                stack: [
                    'devicon-javascript-plain',
                    'devicon-sass-original',
                    'devicon-html5-plain',
                    'devicon-postgresql-plain',
                ],
                description: 'Personal blog built for a friend. LaTeX support built in for advanced text formatting.',
                image: 'sam-miller.png',
            },
            {
                title: 'Ace Anatomy Homepage',
                stack: [
                    'devicon-javascript-plain',
                    'devicon-sass-original',
                    'devicon-html5-plain',
                    'devicon-foundation-plain',
                ],
                description: 'Main webiste for Ace Anatomy.',
                image: 'ace-anatomy.png',
                href: 'https://aceanatomy.com/',
            },
        ],
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-124174866-1',
                head: false,
                anonymize: true,
                respectDNT: true,
                exclude: [],
                pageTransitionDelay: 0,
            },
        },
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
                icon: 'static/icon.webp',
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
