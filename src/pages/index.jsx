import React from 'react';
import Hero from '../components/hero';
import About from '../components/about';
import Experience from '../components/experience';
import SEO from '../components/seo';

const IndexPage = () => (
    <main>
        <SEO keywords={['developer', 'fullstack', 'software', 'portfolio']} />
        <Hero />
        <About />
        <Experience />
    </main>
);

export default IndexPage;
