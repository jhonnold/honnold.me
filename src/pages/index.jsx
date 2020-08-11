import React from 'react';
import Hero from '../components/hero';
import About from '../components/about';
import SEO from '../components/seo';

const IndexPage = () => (
    <main>
        <SEO keywords={['developer', 'fullstack', 'software', 'portfolio']} />
        <Hero />
        <About />
    </main>
);

export default IndexPage;
