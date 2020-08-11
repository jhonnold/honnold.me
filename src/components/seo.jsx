import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ description, lang, meta, keywords }) => {
    const { site } = useStaticQuery(graphql`
        query DefaultSEOQuery {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `);

    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{ lang }}
            meta={[
                {
                    name: 'description',
                    content: metaDescription,
                },
                {
                    property: 'og:title',
                    content: site.siteMetadata.title,
                },
                {
                    property: 'og:description',
                    content: metaDescription,
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    name: 'twitter:card',
                    content: 'summary',
                },
                {
                    name: 'twitter:title',
                    content: site.siteMetadata.title,
                },
                {
                    name: 'twitter:description',
                    content: metaDescription,
                },
            ]
                .concat(
                    keywords.length > 0
                        ? {
                              name: 'keywords',
                              content: keywords.join(', '),
                          }
                        : []
                )
                .concat(meta)}
            title={site.siteMetadata.title}
        />
    );
};

SEO.defaultProps = {
    lang: 'en',
    keywords: [],
    meta: [],
    description: '',
};

SEO.propTypes = {
    description: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.objectOf({ name: PropTypes.string, content: PropTypes.string })),
};

export default SEO;
