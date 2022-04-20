import type {GatsbyConfig} from 'gatsby';
import * as path from 'path';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `JMG DEV BLOG`,
    siteUrl: `https://mungyeong.dev`,
    description: ``,
    author: {
      name: `Jeong MunGyeong`,
      summary: `자바, 타입스크립트를 공부하고 있는 개발자`,
    },
    social: {
      facebook: `https://facebook.com/gyeong5961`,
      github: `https://github.com/mungyeong`,
      mail: `gyeong5961@gmail.com`,
    },
    keywords: [
      'Software Developer',
      'Web Developer',
      'Backend Developer',
      'Korean',
    ],
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`content/blog/`),
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`src/images`),
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
          'gatsby-remark-emoji',
        ],
      },
    },
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
            serialize: ({query: {site, allMarkdownRemark}}) =>
                    allMarkdownRemark.nodes.map(node => ({
                      ...node.frontmatter,
                      description: node.excerpt,
                      date: node.frontmatter.date,
                      url: site.siteMetadata.siteUrl + node.fields.slug,
                      guid: site.siteMetadata.siteUrl + node.fields.slug,
                      custom_elements: [{'content:encoded': node.html}],
                    }))
            ,
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
        short_name: `Jeong MunGyeong`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0096C6`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `@import "./src/styles/variables.scss"; @import "./src/styles/mixins.scss";`,
      },
    },
  ],
}


export default config
