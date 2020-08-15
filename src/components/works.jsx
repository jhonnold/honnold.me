import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Section from './section';

const Works = () => {
    const { site } = useStaticQuery(graphql`
        query WorksQuery {
            site {
                siteMetadata {
                    works {
                        title
                        stack
                        image
                        href
                        description
                    }
                }
            }
        }
    `);

    return (
        <Section>
            <div className="mx-auto p-4">
                <h2 className="text-2xl text-center mb-8">Current & Previous Work</h2>
                <div className="flex flex-wrap container mx-auto items-stretch">
                    {site.siteMetadata.works.map(w => (
                        <div className="lg:w-1/3 md:w-1/2 p-4" key={w.title}>
                            <div
                                className={`overflow-hidden shadow-md h-full flex flex-col ${
                                    w.href ? 'transform hover:scale-105 transition duration-100 cursor-pointer' : ''
                                }`}
                            >
                                {w.href ? (
                                    <OutboundLink href={w.href}>
                                        <img className="w-full min-h-215" src={w.image} alt={w.title} />
                                    </OutboundLink>
                                ) : (
                                    <img className="w-full min-h-215" src={w.image} alt={w.title} />
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
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Works;
