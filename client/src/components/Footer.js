import React from 'react'
import LinkedIn from '../icons/linkedin.png'
import Github from '../icons/github.png'
import Facebook from '../icons/facebook_icon.png'
import '../styles/Footer.css'

const imgStyle = {
    width: '50px',
    height: '50px',
    padding: '5px'
}

const footerStyle = {
    fontWeight: 'bold'
}

function Footer() {
    return(
        <div className="footer w-100 mt-auto bg-secondary p-4" id="footer">
            <p style={footerStyle}>Developed by Fred Bian</p>
            <p style={footerStyle}>© 2022 Fred Bian</p>
            <a href="https://www.linkedin.com/in/tao-bian-9aa137239/"><img src={LinkedIn} alt="LinkedIn" style={imgStyle}></img></a>
            <a href="https://github.com/Fredbian?tab=repositories"><img src={Github} alt="Github" style={imgStyle}></img></a>
            <a href="https://www.facebook.com/profile.php?id=100074467428814"><img src={Facebook} alt="Facebook" style={imgStyle}></img></a>
        </div>
    )
}

export default Footer