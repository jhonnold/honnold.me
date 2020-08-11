import React from 'react';
import Section from './section';

const MS_IN_YEAR = 1000 * 60 * 60 * 24 * 365.25;
const BIRTHDAY = new Date(1995, 7, 30);

const Hero = () => {
    const age = Math.floor((new Date().getTime() - BIRTHDAY.getTime()) / MS_IN_YEAR);

    return (
        <Section dark id="hero">
            <div className="flex flex-col justify-center items-center container mx-auto">
                <h2 className="text-4xl md:text-6xl my-4 font-mono">
                    <span className="text-gold">Hello,</span>
                    <span>&nbsp;World!</span>
                </h2>
                <pre className="text-xs md:text-base">
                    <p>
                        const <span className="text-gold font-semibold">Jay</span> = {'{'}
                    </p>
                    <p>{"  title: 'Sr. Agile Developer',"}</p>
                    <p>{"  experience: '3.5 years',"}</p>
                    <p>{`  age: ${age},`}</p>
                    <p>{'  developer: true,'}</p>
                    <p>{'};'}</p>
                </pre>
            </div>
        </Section>
    );
};

export default Hero;
