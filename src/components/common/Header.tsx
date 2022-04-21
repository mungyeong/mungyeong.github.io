import React from 'react';
import '../../styles/components/header.scss';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { globalHistory } from '@reach/router';
import { BUTTON_COLOR } from '../../constants/buttonType';
import GitHub from '../../images/profile/github.svg';
import Button from './Button';
import Toggler from './Toggler';

interface HeaderProps {
  headerTitle?: JSX.Element;
}

function Header({ headerTitle }: HeaderProps) {
  const { pathname } = globalHistory.location;
  const data = useStaticQuery(graphql`
    query GithubUrlQuery {
      site {
        siteMetadata {
          social {
            github
          }
        }
      }
    }
  `);

  const gitUrl = data.site.siteMetadata.social?.github;

  return (
    <header className="header-area">
      <div className="header-contents">
        <h2 className="header-title">{headerTitle}</h2>
        <div className="header-category-container">
          <Toggler />
          <Link to="/">
            <h3 className={pathname === '/' ? 'active' : ''}>POSTS</h3>
          </Link>
          <Link to="/profile">
            <h3 className={pathname === '/profile' ? 'active' : ''}>PROFILE</h3>
          </Link>
          <Button
            text="GITHUB"
            color={BUTTON_COLOR.BlUE}
            icon={GitHub}
            handleClick={() => {
              if (typeof window === 'undefined') return;
              window.open(`${gitUrl}`);
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
