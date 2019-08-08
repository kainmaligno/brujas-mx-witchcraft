import { Link } from "gatsby"
import "./header.css"
import PropTypes from "prop-types"
import Navbar from '../Navbar'
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar/>
    <div className="hero">
    <div className="big-overlay"></div>
    <h1 className="mainTitle">Brujas Modernas</h1>
    <p className="mainp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
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
