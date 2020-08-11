import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children, dark, id }) => (
    <section id={id} className={`min-h-screen flex ${dark ? 'bg-navy' : 'bg-white'} ${dark ? 'text-white' : 'text-navy'}`}>
        {children}
    </section>
);

Section.defaultProps = {
    dark: false,
};

Section.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    dark: PropTypes.bool,
};

export default Section;
