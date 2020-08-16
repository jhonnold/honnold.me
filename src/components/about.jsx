import React from 'react';
import Img from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Section from './section';

const About = ({ about, specific, links, image }) => (
    <Section>
        <div className="flex flex-col md:flex-row justify-center items-center container mx-auto p-8 text-center md:text-left">
            <div className="md:mr-16 order-2 md:order-1">
                <h1 className="text-3xl md:text-4xl my-4">Jay Honnold</h1>
                <p className="font-light mb-2">{about}</p>
                <p className="font-light mb-4">{specific}</p>
                <ul className="flex text-3xl justify-center md:justify-start">
                    <li className="mr-4">
                        <OutboundLink href={links.github}>
                            <i className="devicon-github-plain" />
                        </OutboundLink>
                    </li>
                    <li className="mx-4">
                        <OutboundLink href={links.linkedin}>
                            <i className="devicon-linkedin-plain" />
                        </OutboundLink>
                    </li>
                </ul>
            </div>
            <Img
                alt="Jay Honnold Portrait"
                fluid={image.childImageSharp.fluid}
                className="w-64 md:w-full shadow-md order-1 md:order-2"
            />
        </div>
    </Section>
);

export default About;
