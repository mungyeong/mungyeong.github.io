import type {GatsbyConfig} from 'gatsby';
import * as path from 'path';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `정문경 Dev Blog`,
    siteUrl: `https://mungyeong.dev`,
    description: ``,
    author: {
      name: `Jeong MunGyeong`,
      summary: `자바, 타입스크립트를 공부하고 있는 개발자`,
    },
    social: {
      facebook: `gyeong5961`,
      github: `mungyeong`,
    }
  },

  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`content/blog`),
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`static/images`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({query: {site, allMarkdownRemark}}) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node?.fields?.slug,
                  guid: site.siteMetadata.siteUrl + node?.fields?.slug,
                  custom_elements: [{"content:encoded": node.html}],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Jeong MunGyeong Dev Blog's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jeong MunGyeong Dev Blog`,
        short_name: `Dev Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `rgba(0, 0, 0, 0)`,
        display: `standalone`,
        icon: `static/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        documentPaths: [`./src/**/*.{ts,tsx}`]
      }
    }
  ],
}

export default config
