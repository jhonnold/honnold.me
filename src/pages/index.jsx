import React from 'react';
import Hero from '../components/hero';
import SEO from '../components/seo';

const IndexPage = () => (
    <main>
        <SEO keywords={['developer', 'fullstack', 'software', 'portfolio']} />
        <Hero />
    </main>
);

export default IndexPage;
