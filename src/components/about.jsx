import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Section from './section';

const About = () => {
    const { site } = useStaticQuery(graphql`
        query AboutQuery {
            site {
                siteMetadata {
                    about
                    specific
                    links {
                        github
                        linkedin
                    }
                }
            }
        }
    `);

    return (
        <Section>
            <div className="flex flex-col md:flex-row justify-center items-center container mx-auto p-4 text-center md:text-left">
                <div className="md:mr-16 order-2 md:order-1">
                    <h1 className="text-3xl md:text-4xl my-4">Jay Honnold</h1>
                    <p className="font-light mb-2">{site.siteMetadata.about}</p>
                    <p className="font-light mb-4">{site.siteMetadata.specific}</p>
                    <ul className="flex text-3xl justify-center md:justify-start">
                        <li className="mr-4">
                            <OutboundLink href={site.siteMetadata.links.github}>
                                <i className="devicon-github-plain" />
                            </OutboundLink>
                        </li>
                        <li className="mx-4">
                            <OutboundLink href={site.siteMetadata.links.linkedin}>
                                <i className="devicon-linkedin-plain" />
                            </OutboundLink>
                        </li>
                    </ul>
                </div>
                <img
                    alt="Jay Honnold Portrait"
                    src="/jay.jpg"
                    className="w-64 md:w-auto md:max-w-sm shadow-md order-1 md:order-2"
                />
            </div>
        </Section>
    );
};

export default About;
