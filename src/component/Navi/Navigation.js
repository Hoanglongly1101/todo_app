import React from 'react'
import {Link} from 'react-router-dom'
const Navigation = () => {
    const navLinkStyle = {color:'white'}
    return (
        <nav>
            <h3>TODO LIST</h3>
            <ul className="nav-link">
                <Link to="/" style={navLinkStyle}>Home</Link>
                <Link to="/about"style={navLinkStyle}>About</Link>
            </ul>
        </nav>  
    )
}

export default Navigation