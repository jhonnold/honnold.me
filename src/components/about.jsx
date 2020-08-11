import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Section from './section';
import image from '../images/jay.jpg';

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
        <Section id="about">
            <div className="flex flex-col justify-center items-center container mx-auto px-4">
                <img alt="Jay Honnold" src={image} className="w-48 md:w-64 shadow-md" />
                <h2 className="text-3xl md:text-4xl my-4">Jay Honnold</h2>
                <p className="text-center max-w-screen-sm">{site.siteMetadata.about}</p>
            </div>
        </Section>
    )
};

export default About;