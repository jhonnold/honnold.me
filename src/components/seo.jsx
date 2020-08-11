import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({ description, lang, meta, keywords, title }) {
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
            htmlAttributes={{
                lang,
            }}
            meta={[
                {
                    name: 'description',
                    content: metaDescription,
                },
                {
                    property: 'og:title',
                    content: title,
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
                    content: title,
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
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
        />
    );
}

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
    title: PropTypes.string.isRequired,
};

export default SEO;
