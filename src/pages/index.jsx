import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Hero from '../components/hero';
import About from '../components/about';
import Experience from '../components/experience';
import Works from '../components/works';
import SEO from '../components/seo';

const IndexPage = () => (
    <main>
        <SEO keywords={['developer', 'fullstack', 'software', 'portfolio']} />
        <ReactFullpage
            licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
            navigation
            navigationTooltips={['Home', 'About', 'Experience', 'Works']}
            sectionSelector="section"
            scrollOverflow
            render={() => (
                <ReactFullpage.Wrapper>
                    <Hero />
                    <About />
                    <Experience />
                    <Works />
                </ReactFullpage.Wrapper>
            )}
        />
    </main>
);

export default IndexPage;
