import React from 'react';

const Section = ({ children, dark }) => (
    <section className={`min-h-screen ${dark ? 'bg-navy text-white' : 'bg-white text-navy'}`}>{children}</section>
);

Section.defaultProps = {
    dark: false,
};

export default Section;
