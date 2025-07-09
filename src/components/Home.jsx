import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home-first-section">
          <div className="home-first-image-container">
              <img src="./zebra.jpg" alt="Myimage" className="home-first-image"/>
              <h1>Debasish Deori</h1>
              <p>Turning data into insights, models into solutions, and curiosity into innovation—welcome to my world of data science.</p>
              <div className = 'social-links'>

                {/* Medium Link  */}
                <div className="link-icon">
                  <a href="https://medium.com/@debasishdeoribn98" target="" rel="noopener noreferrer">
                    <img src="/medium-icon.svg" alt="MediumIcon" />
                  </a>
                </div>

                {/* Linkedin Link  */}
                <div className="link-icon">
                  <a href="https://www.linkedin.com/in/debasish-deori-b3aa0922a/" target="" rel="noopener noreferrer">
                    <img src="/linkedin-icon.svg" alt="LinkedinIcon" />
                  </a>
                </div>



                {/* Github Link  */}
                <div className="link-icon">
                <a href="https://github.com/DeoriDebasish" target="" rel="noopener noreferrer">
                    <img src="/github-icon.svg" alt="GithubIcon" />
                  </a>
                </div>


                {/* X Link */}
                <div className="link-icon">
                <a href="https://x.com/debasish_wds" target="" rel="noopener noreferrer">
                    <img src="/twitter-icon.svg" alt="XIcon" />
                  </a>
                </div>

                {/* Insta Link */}
                <div className="link-icon">
                <a href="https://www.instagram.com/debasish_deori/" target="" rel="noopener noreferrer">
                    <img src="/instagram-icon.svg" alt="InstaIcon" />
                  </a>
                </div>

              </div>
          </div>
          <div className="home-first-text-container">
              <h1>Data </h1>
              <h1 className="scientists">Scientist</h1>
              <p>Passionate about leveraging AI and data to uncover insights and drive intelligent solutions. Specialize in transforming complex problems into impactful, data-driven innovations.</p>
              <div className="home-current-insights">
                <div className="yoe">
                  <span className="large_text">+2</span><br/>Years of Experience
                </div>
                <div className="projectCount">
                <span className="large_text">+10</span><br/>Projects
                </div>
                <div>
                  <span className="large_text">+10</span><br/>Tools
                </div>
              </div>
          </div>
      </div>


      {/* Button Sections */}
      <div className="home-button-section">
          <button className="get-in-touch-button"  onClick={() => navigate("/contact")}>Get in Touch</button>
          <button className="project-button" onClick={() => navigate("/projects")}>View Projects</button>
      </div>


      {/* Second Section */}
      <div className="home-second-section">
          <h1>About me</h1>
          <p>Hello</p>
      </div>
    </div>
  )
};

export default Home;