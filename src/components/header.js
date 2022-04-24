import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    className="bg-indigo-800">
    <div className="p-5">
        <Link to="/" className="text-white text-4xl ">
          {siteTitle}
        </Link>
        <nav className="pt-1">
        <Link to="/" className="p-2 underline decoration-yellow-300 text-white">home</Link>
          <Link to="/about" className="p-2 underline decoration-yellow-300 text-white">about</Link>
          <Link to="/work" className="p-2 underline decoration-yellow-300 text-white">work</Link>
          <Link to="/blog" className="p-2 underline decoration-yellow-300 text-white">blog</Link>
          <Link to="/contact" className="p-2 underline decoration-yellow-300 text-white">contact me</Link>
        </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
