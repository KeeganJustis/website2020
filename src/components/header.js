import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#3480eb`,
      marginBottom: `1.45rem`,
    }}
  >
  
      <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }} 
    >
    <nav style={{
      border-bottom: `1px solid rgba(255,62,0,0.1)`,
		font-weight: `300`,
		padding: `0 1em`,
		color: `#d3dff0`,
    }}>
    <ul style={{
      margin: 0,
		padding: 0
    }}>
		<li><a  href='.'>Home</a></li>
		<li><a  href='about'>About</a></li>
		<li><a  href='skills'>Skills</a></li>
		<li><a  href='social'>Social Media</a></li>
		 <li><a href='stuff'>Classy Stuff</a></li> 
		<li><a  href='life'>Visualized Life</a></li>
		<li><a  href='Contact'>Contact</a></li>
		

	</ul>
</nav>

      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
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
