import {graphql, Link, useStaticQuery} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import * as React from 'react';

export default function Layout({ location, title, children }) {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
            <h1 className="main-heading">
              <Link to="/">{title}</Link>
            </h1>
    )
  } else {
    header = (
            <Link className="header-link-home" to="/">
              {title}
            </Link>
    )
  }

  return (
          <div className="global-wrapper" data-is-root-path={isRootPath}>
            <header className="global-header">{header}</header>
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.com">Gatsby</a>
              <a target="_blank" href="https://icons8.com/icon/Sf2NuZRCVuaE/dev">
                Dev</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            </footer>
          </div>
  )
}
