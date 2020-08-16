import React from 'react';
import Section from './section';

const Experience = ({ experience }) => (
    <Section dark>
        <div className="flex flex-col justify-center items-center container mx-auto p-4">
            <h2 className="text-2xl">Experience</h2>
            {experience.map(e => (
                <article className="w-full my-8" key={e.start}>
                    <h3 className="flex flex-wrap items-center justify-between mb-2">
                        <span className="w-full md:w-auto">
                            <span className="text-gold text-lg">{e.title}</span> {e.company}
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

export default Experience;
