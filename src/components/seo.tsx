import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import {Helmet} from 'react-helmet';

export default function Seo() {

  const Seo = ({description, lang, meta, title}) => {
    const {site} = useStaticQuery(
            graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              facebook,
              github
            }
          }
        }
      }
    `
    )

    const metaDescription = description || site?.siteMetadata.description || '';
    const defaultTitle: string = site?.siteMetadata?.title || '';

    return (
            <Helmet
                    htmlAttributes={{
                      lang,
                    }}
                    title={title}
                    titleTemplate={defaultTitle}
                    meta={[
                      {
                        name: `description`,
                        content: metaDescription,
                      },
                      {
                        property: `og:title`,
                        content: title,
                      },
                      {
                        property: `og:description`,
                        content: metaDescription,
                      },
                      {
                        property: `og:type`,
                        content: `website`,
                      },
                    ].concat(meta)}
            />
    )
  }

  Seo.defaultProps = {}
  // Seo.propTypes = {
  //   description: string,
  //   lang: string
  //   meta: [],
  //   title: string,
  // lang: `en`,
  //  meta: [],
  // description: ``,
  // }
}
