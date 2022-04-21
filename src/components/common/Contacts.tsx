import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import github from '../../images/profile/github.svg';
import facebook from '../../images/profile/facebook.svg';
import circle from '../../images/profile/circle.svg';

import '../../styles/components/contacts.scss';

const Contacts = () => {
  const data = useStaticQuery(graphql`
    query ContactsQuery {
      site {
        siteMetadata {
          social {
            github
            facebook
            mail
          }
        }
      }
    }
  `);
  const social = data.site.siteMetadata?.social;

  const SNSLinkItem = ({ url, img }) =>
    url ? (
      <a className="snslink--item" href={social[url]} target="_blank" rel="noreferrer">
        <img src={img} alt={`${url} icon`} />
      </a>
    ) : null;

  return (
    <div className="contacts">
      <div className="mail">
        <img src={circle} alt="circle icon" className="tag-image" />
        <span>{social.mail}</span>
      </div>
      <div className="snslink">
        <SNSLinkItem url={'github'} img={github} />
        <SNSLinkItem url={'facebook'} img={facebook} />
      </div>
    </div>
  );
};

export default Contacts;
