import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Section from './section';

const Experience = () => {
    const { site } = useStaticQuery(graphql`
        query ExperiencesQuery {
            site {
                siteMetadata {
                    experience {
                        title
                        company
                        start
                        end
                        details
                    }
                }
            }
        }
    `);

    return (
        <Section dark id="experience">
            <div className="flex flex-col justify-center items-center container mx-auto">
                <h2 className="text-xl">Experience</h2>
                {site.siteMetadata.experience.map(e => (
                    <article className="w-full my-8" key={e.start}>
                        <h3 className="flex flex-wrap items-center justify-between mb-2">
                            <span className="w-full md:w-auto">
                                <span className="text-gold text-lg">{e.title}</span> 
                                {' '}{e.company}
                            </span>
                            <span className="text-base md:text-lg">
                                {e.start} - {e.end}
                            </span>
                        </h3>
                        <p className="font-light">{e.details}</p>
                    </article>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
