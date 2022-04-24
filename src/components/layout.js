/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white">
      <Header siteTitle={`márton münz's website`} />
      <div className="p-8 flex-grow mr-40">
        <main>{children}</main>
      </div>
      <div>     
        <footer className="p-4 flex justify-end bg-gray-700">
          © {new Date().getFullYear()}, Márton Münz
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout