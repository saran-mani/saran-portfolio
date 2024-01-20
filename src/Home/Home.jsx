import { Component } from "react";
import myImage from "../assets/myImage.png";
import myImage2 from "../assets/myImage2.png";
import resume from "../assets/SaranResume.pdf";
import jsIcon from "../assets/icons/js.png";
import cssIcon from "../assets/icons/css.png";
import htmlcon from "../assets/icons/html.png";
import expressIcon from "../assets/icons/expressjs.png";
import reactIcon from "../assets/icons/reactjs.png";
import bootstrapIcon from "../assets/icons/bootstrap.png";
import nodeIcon from "../assets/icons/nodejs.png";
import ejsIcon from "../assets/icons/ejs.png";
import mongodbIcon from "../assets/icons/mongodb.png";
import npmIcon from "../assets/icons/npm.png";
import angularIcon from "../assets/icons/angular.png";
import whatsappIcon from "../assets/icons/whatsapp.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import githubIcon from "../assets/icons/github.svg";
import nodejsSvg from "../assets/icons/nodejs.svg";
import expressSvg from "../assets/icons/express-js.svg";
import mongodbSvg from "../assets/icons/mongodb.svg";
import ejsSvg from "../assets/icons/ejs.svg";
import angularSvg from "../assets/icons/angular.svg";
import yelpcampimg from "../assets/projectImages/yelpcamp.png";
import countryinfoimg from "../assets/projectImages/countryinfo.png";

import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        {/* NAVBAR SECTION */}
        <nav className="navbar navbar-dark  nav-bg-color navbar-expand-md px-3">
          <a href="#home" className="navbar-brand fs-3 fw-bold">
            Saran
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbar"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* MAIN SECTION */}
        <div className="head" id="home">
          <div className="container-fluid">
            <div className="row mx-auto">
              <div className="col-sm  pt-5">
                <h1 className="header fw-bolder">
                  I'm Saran, Skilled in
                  <br />{" "}
                  <span style={{ color: "white" }}>
                    <Typewriter
                      words={[
                        "Full Stack Developement",
                        "Web design",
                        "MERN Stack",
                      ]}
                      loop={100000000000}
                      cursor
                      cursorStyle="|"
                      typeSpeed={150}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
                <div className="py-5 resumemain">
                  <a
                    className="resume"
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </div>
              </div>
              <div className="col-sm text-center  pt-5 " ref={myImage}>
                <img
                  src={myImage}
                  className="img-fluid myImage w-75"
                  alt=""
                  srcSet=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* ABOUT ME SECTION */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 220"
          className="wave-1"
        >
          <path
            fill="#379683"
            fillOpacity="1"
            d="M0,64L80,85.3C160,107,320,149,480,138.7C640,128,800,64,960,42.7C1120,21,1280,43,1360,53.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <div className="container-fluid" id="about">
          <div className="row part2">
            {" "}
            <h1 className="text-center py-3">About me</h1>
            <div className="col-sm text-center  pt-5">
              {" "}
              <img
                src={myImage2}
                className="img-fluid myImage w-75"
                alt=""
                srcSet=""
              />
            </div>
            <div className="col-sm text-center  pt-5">
              <p className="px-3 pt-3 intro">
                I'm Saran, a Full Stack Developer with a passion for crafting
                exceptional web experiences. Proficient in Web Design and
                specialized in the MERN Stack, I thrive on bringing creative
                solutions to life. My commitment to staying ahead in the
                ever-evolving tech landscape drives me to deliver innovative and
                robust outcomes. Let's collaborate and turn ideas into reality.
              </p>
            </div>
          </div>
        </div>
        {/* Projects SECTION */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 220"
          className="wave-2"
        >
          <path
            fill="#8ee4af"
            fillOpacity="1"
            d="M0,64L80,85.3C160,107,320,149,480,138.7C640,128,800,64,960,42.7C1120,21,1280,43,1360,53.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <div id="projects" className="container-fluid projects">
          <h1 className="text-center py-3">Projects</h1>
          <div className="row">
            <div className="col-sm-6">
              <div class="card mb-3">
                <img src={yelpcampimg} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Yelp Camp</h5>
                  <div class="d-flex flex-row mb-3" id="builtwith">
                    <div class="p-2">
                      <img src={nodejsSvg} alt="" />
                    </div>
                    <div class="p-2">
                      <img src={expressSvg} alt="" />
                    </div>
                    <div class="p-2">
                      <img src={mongodbSvg} alt="" />
                    </div>
                    <div class="p-2">
                      <img src={ejsSvg} alt="" />
                    </div>
                  </div>
                  <p class="card-text">
                    Welcome to YelpCamp! Jump right in and explore our many
                    campgrounds. Feel free to share some of your own and comment
                    on others!
                  </p>
                  <a
                    href="https://yelpcamp-l3ji.onrender.com/"
                    rel="noreferrer"
                    target="_blank"
                    class="btn btn-dark mb-2"
                  >
                    Click to preview
                  </a>
                  <br />
                  <a
                    href="https://github.com/saran-mani/YelpCamp"
                    rel="noreferrer"
                    target="_blank"
                    class="btn btn-dark"
                  >
                    <img src={githubIcon} alt="" />
                    source code
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div class="card mb-3">
                <img src={countryinfoimg} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Countries Info</h5>
                  <div class="d-flex flex-row mb-3" id="builtwith">
                    <div class="p-2">
                      <img src={nodejsSvg} alt="" />
                    </div>
                    <div class="p-2">
                      <img src={angularSvg} alt="" />
                    </div>
                  </div>
                  <p class="card-text">
                    Welcome to YelpCamp! Jump right in and explore our many
                    campgrounds. Feel free to share some of your own and comment
                    on others!
                  </p>
                  <a
                    href="https://country-info-detail.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                    class="btn btn-dark mb-2"
                  >
                    Click to preview
                  </a>
                  <br />
                  <a
                    href="https://github.com/saran-mani/countries-info.git"
                    rel="noreferrer"
                    target="_blank"
                    class="btn btn-dark"
                  >
                    <img src={githubIcon} alt="" />
                    source code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SKILLS SECTION */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 220"
          className="wave-3"
        >
          <path
            fill="#05386b"
            fillOpacity="1"
            d="M0,64L80,85.3C160,107,320,149,480,138.7C640,128,800,64,960,42.7C1120,21,1280,43,1360,53.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <div id="skills" className="container-fluid skills">
          <h1 className="text-center py-3">Skills</h1>
          <div className="row">
            <div className="col-sm">
              <div id="skill-icon">
                <img src={jsIcon} alt="" />
                <img src={nodeIcon} alt="" />
                <img src={angularIcon} alt="" />
                <img src={reactIcon} alt="" />
                <img src={expressIcon} alt="" />
                <img src={mongodbIcon} alt="" />
                <img src={ejsIcon} alt="" />
                <img src={htmlcon} alt="" />
                <img src={cssIcon} alt="" />
                <img src={bootstrapIcon} alt="" />
                <img src={npmIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* CONTACT SECTION */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 220"
          className="wave-4"
        >
          <path
            fill="#edf5e1"
            fillOpacity="1"
            d="M0,64L80,85.3C160,107,320,149,480,138.7C640,128,800,64,960,42.7C1120,21,1280,43,1360,53.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <div className="container-fluid contact" id="contact">
          <h1 className="text-center py-3">Contact</h1>
          <div className="row ">
            <div className="col-sm">
              <p>
                <a href="tel:+91 6379710438">Phone:6379710438</a>
              </p>
              <p>
                <a href="mailto:saranmvdm@gmail.com">
                  Email:saranmvdm@gmail.com
                </a>
              </p>
            </div>
            <div className="col-sm">
              <p>
                <a
                  href="https://www.linkedin.com/in/saranmj/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedinIcon} alt="" />
                  Linkedin
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/saran-mani/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="" />
                  Github
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/mj__saran/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagramIcon} alt="" />
                  Instagram
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/qr/OZJYSTAFSDJGH1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={whatsappIcon} alt="" />
                  Whatsapp
                </a>
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm text-center">
              <h4>Saran Codes</h4>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
