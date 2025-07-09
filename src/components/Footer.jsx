import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
        <hr></hr>
        <div className="footer">
            <div className="footer-text">
                <div className="footer-heading">
                    <p>Portfolio</p>
                </div>
                <div className="footer-body">
                    <p>© 2025 Debasish Deori. All rights reserved.</p>
                </div>
            </div>


            <div className="footer-text">
                <div className="footer-heading">
                    <p>Quick Links</p>
                </div>
                <div className="footer-body">
                    <Link className="footer-link-text" to = "/">Home</Link>
                    <Link className="footer-link-text" to = "/about">About</Link>
                    <Link className="footer-link-text" to = "/projects">Projects</Link>
                    <Link className="footer-link-text" to = "/contact">Contact</Link>
                </div>
            </div>


            <div className="footer-text">
                <div className="footer-heading">
                    <p>Connect</p>
                </div>
                <div className="footer-body">
                    <div className='footer-links'>
                        {/* Medium Footer Social */}
                        <div className="footer-link">
                            <a href="https://medium.com/@debasishdeoribn98" target="" rel="noopener noreferrer">
                                <img src="/footer-medium.svg" alt="MediumIcon" width="40" height="40" />
                            </a>
                        </div>


                        {/* Linkedin Footer Social */}
                        <div className="footer-link">
                            <a href="https://www.linkedin.com/in/debasish-deori-b3aa0922a/" target="" rel="noopener noreferrer">
                                <img src="/footer-linkedin.svg" alt="LinkedinIcon" width="40" height="40" />
                            </a>
                        </div>


                        {/* Github Footer Social */}
                        <div className="footer-link">
                            <a href="https://github.com/DeoriDebasish" target="" rel="noopener noreferrer">
                                <img src="/footer-github.svg" alt="GithubIcon" width="40" height="40" />
                            </a>
                        </div>


                        {/* X Footer Social */}
                        <div className="footer-link">
                            <a href="https://x.com/debasish_wds" target="" rel="noopener noreferrer">
                                <img src="/footer-twitter.svg" alt="XIcon" width="40" height="40" />
                            </a>
                        </div>


                        {/* Insta Footer Social */}
                        <div className="footer-link">
                            <a href="https://www.instagram.com/debasish_deori/" target="" rel="noopener noreferrer">
                                <img src="/footer-insta.svg" alt="InstaIcon" width="40" height="40" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;