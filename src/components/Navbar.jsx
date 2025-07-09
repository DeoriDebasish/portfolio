import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const [hovered, setHovered] = useState(null);
  return (
    <div className="nav-container">
    <nav className="nav-bar">
        {/* Home navigation */}
          <NavLink to="/"
          className="nav-item"
          onMouseEnter = {()=>setHovered("home")}
          onMouseLeave = {()=>setHovered(null)}
          >
            <img src="./home_icon.svg" alt = "Home" className="nav-icon"/>
            
          </NavLink>


        {/* Projects navigation */}
          <NavLink to="/projects"
            className="nav-item"
            onMouseEnter = {()=>setHovered("projects")}
            onMouseLeave = {()=>setHovered(null)}
          >
            <img src="./project.svg" alt="projects" className="nav-icon"/>
            
          </NavLink>
          

        {/* About navigation */}
          <NavLink to="/about"
          className="nav-item"
          onMouseEnter = {()=>setHovered("about")}
          onMouseLeave={()=>setHovered(null)}
          >
            <img src="./about_icon.svg" alt="about" className="nav-icon"/>
            
          </NavLink>


           {/* Contact navigation */}
           <NavLink to="/contact"
          className="nav-item"
          onMouseEnter = {()=>setHovered("contact")}
          onMouseLeave={()=>setHovered(null)}
          >
            <img src="./contact.svg" alt="about" className="nav-icon"/>
            
          </NavLink>
        
    </nav>
    
      <div className="navdescription">
        <span className={`nav-text-container nav-text ${hovered === "home" ? "show" : ""}`}>
                Home
        </span>
        
        
        <span className = {`nav-text-container nav-text ${hovered ==="projects" ? "show":""}`}>
                    Projects
        </span>

        <span className={`nav-text-container nav-text ${hovered === "about" ? "show" : ""}`}>
            About
        </span>

        <span className={`nav-text-container nav-text ${hovered === "contact" ? "show" : ""}`}>
            Contact
        </span>

      </div>
    </div>
  );
};
export default Navbar;