import React from 'react';
import Section from './section';
import HeroSVG from '../images/table-contents.svg';

const Hero = () => (
    <Section dark>
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl md:text-6xl my-4 font-mono">
                <span className="text-gold">Hello,</span>
                <span>&nbsp;World!</span>
            </h2>
            <div className="w-full">
                <div className="container mx-auto px-8 flex justify-center">
                    <img src={HeroSVG} alt="Developer table" className="min-w-32" />
                </div>
            </div>
            <hr className="w-full -m-px border-2 border-white" />
        </div>
    </Section>
);

export default Hero;
