import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Img from 'gatsby-image';
import Section from './section';

const Works = ({ works, images }) => (
    <Section>
        <div className="mx-auto p-4">
            <h2 className="text-2xl text-center mb-8">Current & Previous Work</h2>
            <div className="flex flex-wrap container mx-auto items-stretch">
                {works.map(w => {
                    const img = images.edges.find(e => e.node.relativePath === w.image);
                    const { fluid } = img.node.childImageSharp;

                    return (
                        <div className="lg:w-1/3 sm:w-1/2 w-full p-4" key={w.title}>
                            <div
                                className={`overflow-hidden shadow-md h-full flex flex-col ${
                                    w.href ? 'transform hover:scale-105 transition duration-100 cursor-pointer' : ''
                                }`}
                            >
                                {w.href ? (
                                    <OutboundLink href={w.href}>
                                        <Img className="w-full min-h-215" fluid={fluid} alt={w.title} />
                                    </OutboundLink>
                                ) : (
                                    <Img className="w-full min-h-215" fluid={fluid} alt={w.title} />
                                )}
                                <div className="px-6 py-4 bg-white flex-1 flex flex-col justify-between">
                                    <h3 className="text-lg">{w.title}</h3>
                                    <p className="font-light my-2">{w.description}</p>
                                    <ul className="flex">
                                        {w.stack.map(icon => (
                                            <li key={icon} className="mr-4 bg-navy px-2 py-1" title={icon}>
                                                <i className={`${icon} text-gold`} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </Section>
);

export default Works;
