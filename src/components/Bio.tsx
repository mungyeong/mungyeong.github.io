import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata?.author;

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={['png', 'png', 'png']}
        src="../images/profile.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
    </div>
  );
};

export default Bio;
