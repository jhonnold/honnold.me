import React from 'react';
import { graphql } from 'gatsby';
import ReactFullpage from '@fullpage/react-fullpage';
import Hero from '../components/hero';
import About from '../components/about';
import Experience from '../components/experience';
import Works from '../components/works';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
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
                    <About
                        about={data.site.siteMetadata.about}
                        specific={data.site.siteMetadata.specific}
                        links={data.site.siteMetadata.links}
                        image={data.aboutImage}
                    />
                    <Experience experience={data.site.siteMetadata.experience} />
                    <Works images={data.experienceImages} works={data.site.siteMetadata.works} />
                </ReactFullpage.Wrapper>
            )}
        />
    </main>
);

export default IndexPage;

export const query = graphql`
    query HomeQuery {
        site {
            siteMetadata {
                about
                specific
                links {
                    github
                    linkedin
                }
                experience {
                    title
                    company
                    start
                    end
                    details
                }
                works {
                    title
                    stack
                    image
                    href
                    description
                }
            }
        }
        experienceImages: allFile(filter: { relativePath: { regex: "/^works//" } }) {
            edges {
                node {
                    relativePath
                    name
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
        aboutImage: file(relativePath: { eq: "jay.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;
