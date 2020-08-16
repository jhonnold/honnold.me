import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children, dark }) => (
    <section className={`min-h-screen ${dark ? 'bg-navy text-white' : 'bg-white text-navy'}`}>{children}</section>
);

Section.defaultProps = {
    dark: false,
};

Section.propTypes = {
    children: PropTypes.node.isRequired,
    dark: PropTypes.bool,
};

export default Section;
