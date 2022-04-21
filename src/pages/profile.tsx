import React, { useEffect, useState } from 'react';
import '../styles/pages/about.scss';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Contacts from '../components/common/Contacts';
import profile from '../images/profile/profile.svg';
import { COLOR } from '../constants/togglerType';

const Profile = ({ location }) => {
  const data = useStaticQuery(graphql`
    query ProfileQuery {
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
  const [color, setColor] = useState<string>('');
  const author = data.site.siteMetadata?.author;
  const instruction = author.summary.replace(/\n/g, '<br/>');

  useEffect(() => {
    setColor(window.localStorage.getItem(COLOR.LOCAL_STORAGE_KEY));
  }, []);

  const theme = (name: string) => (color === 'light' ? `${name}` : `${name}-dark`);

  return (
    <Layout location={location}>
      <div className="profile-page">
        <h2 className={theme('profile-name')}>{author.name}</h2>
        <p className={theme('self-introduction')} dangerouslySetInnerHTML={{ __html: instruction }} />
        <img className="profile-image" src={profile} alt="profile" />
        <Contacts />
      </div>
    </Layout>
  );
};

export default Profile;
