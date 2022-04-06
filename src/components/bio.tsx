import {graphql, useStaticQuery} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import * as React from 'react'

export default function Bio() {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            facebook
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
          <div className="bio">
            <StaticImage
                    className="bio-avatar"
                    layout="fixed"
                    formats={["AUTO", "WEBP", "AVIF"]}
                    src="../images/profile.gif"
                    width={200}
                    height={200}
                    quality={100}
                    alt="My picture"
            />
            {author?.name && (
                    <p>
                      <strong>{author.name}</strong>
                      <br/>
                      {author?.summary || null}
                      {` `}
                      <br/>
                      <br/>
                      <br/>
                      <a href={`https://facebook.com/${social?.facebook || ``}`}>
                        <StaticImage
                                className="bio-avatar"
                                layout="constrained"
                                formats={["AUTO", "WEBP", "AVIF"]}
                                src="../images/facebook.png"
                                width={64}
                                height={64}
                                quality={100}
                                alt="You should follow them on facebook"
                        />
                      </a>
                      <a href={`https://github.com/${social?.github || ``}`}>
                        <StaticImage
                                className="bio-avatar"
                                layout="constrained"
                                formats={["AUTO", "WEBP", "AVIF"]}
                                src="../images/github.png"
                                width={64}
                                height={64}
                                quality={100}
                                alt="You should follow them on GitHub"
                        />
                      </a>
                    </p>
            )}
          </div>
  )
}
