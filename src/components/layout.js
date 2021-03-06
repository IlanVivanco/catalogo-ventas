/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import MainFooter from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          facebook
          whatsapp
        }
      }
    }
  `)

  return (
    <>
      {/* Wrapper for sticky footer */}
      <div className="site">
        <Navbar
          siteTitle={data.site.siteMetadata.title}
          facebook={data.site.siteMetadata.facebook}
          whatsapp={data.site.siteMetadata.whatsapp}
        />
        <main className="site-content">{children}</main>
        <MainFooter
          facebook={data.site.siteMetadata.facebook}
          whatsapp={data.site.siteMetadata.whatsapp}
        />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
