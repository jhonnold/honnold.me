import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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
                    }
                }
            }
        }
    `);

    return (
        <Section>
            <div className="mx-auto p-4">
                <h2 className="text-xl text-center">Previous Works</h2>
                <div className="flex flex-wrap container mx-auto items-center">
                    {site.siteMetadata.works.map(w => (
                        <div className="p-8 lg:w-1/2" key={w.title}>
                            <h3 className="text-center mb-4">{w.title}</h3>
                            <img src={w.image} alt={w.title} className="shadow-md"/>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Works;
