import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Section from './section';

const About = () => {
    const { site } = useStaticQuery(graphql`
        query AboutQuery {
            site {
                siteMetadata {
                    about
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
                <div className="mr-8 order-2 md:order-1">
                    <h1 className="text-3xl md:text-4xl my-4">Jay Honnold</h1>
                    <p className="font-light">{site.siteMetadata.about}</p>
                    <ul className="flex mt-8 text-3xl justify-center md:justify-start">
                        <li className="mr-4">
                            <a href={site.siteMetadata.links.github}>
                                <i className="devicon-github-plain" />
                            </a>
                        </li>
                        <li className="mx-4">
                            <a href={site.siteMetadata.links.linkedin}>
                                <i className="devicon-linkedin-plain" />
                            </a>
                        </li>
                    </ul>
                </div>
                <img
                    alt="Jay Honnold Portrait"
                    src="/jay.jpg"
                    className="max-w-xs w-full shadow-md order-1 md:order-2"
                />
            </div>
        </Section>
    );
};

export default About;
