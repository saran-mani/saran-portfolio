import { Component } from "react";
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
import emailSvg from "../assets/icons/email.svg";
import myImage from "../assets/image.png";
import yelpcampimg from "../assets/projectImages/yelpcamp.png";
import countryinfoimg from "../assets/projectImages/countryinfo.png";
import logo from '../assets/logo.png'
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        {/* NAVBAR SECTION */}
        <nav className="navbar navbar-dark  nav-bg-color navbar-expand-md px-3">
          <a href="#home" className="navbar-brand fs-3 fw-bold">
            <img src={logo} alt="" style={{width:'25px',paddingBottom:'5px'}}/> Saran
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
                  <span style={{ color: "#A6B1E1" }}>
                    <Typewriter
                      words={[
                        "Full Stack Developement",
                        "Web design",
                        "MEAN Stack",
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
                <div className="py-5 resumemain" data-aos="fade-up">
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
              <div className="col-sm text-center  pt-5 ">
                <div data-aos="fade-right" data-aos-duration="1000">
                  <a
                    href="https://github.com/saran-mani"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-dark m-3 px-4">
                      <img src={githubIcon} style={{ width: "35px" }} alt="" />
                      Github
                    </button>
                  </a>
                </div>

                <br />
                <div data-aos="fade-right" data-aos-duration="1500">
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/saranmj/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-light m-3 px-3">
                      <img
                        src={linkedinIcon}
                        alt=""
                        style={{ width: "35px" }}
                      />
                      Linked In
                    </button>
                  </a>
                </div>

                <br />
                <div data-aos="fade-right" data-aos-duration="2000">
                  <a
                    href="mailto:saranmvdm@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-light m-3 px-4">
                      <img
                        src={emailSvg}
                        alt=""
                        style={{ width: "35px", paddingRight: "5px" }}
                      />
                      Email
                    </button>
                  </a>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        {/* ABOUT ME SECTION */}
        <div className="container-fluid" id="about">
          <div className="row part2 pb-5 pt-5 align-items-center">
            {" "}
            <h1
              className="text-center py-3"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              About me
            </h1>
            <div
              className="col-sm text-center  pt-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {" "}
              <img
                src={myImage}
                className="img-fluid myImage w-75"
                alt=""
                srcSet=""
              />
            </div>
            <div
              className="col-sm text-center  pt-5"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <p className="px-3 pt-3 intro">
                Hey there, I'm Saran! 👋 As a web developer, I thrive on turning
                ideas into captivating digital experiences. My toolkit includes
                Node.js, Express.js, MongoDB, Angular, and React – all fueled by
                my passion for JavaScript. 🚀 Let's collaborate and bring your
                web projects to life! 💻✨
              </p>
            </div>
          </div>
        </div>
        {/* Projects SECTION */}
        <div id="projects" className="container-fluid pt-5 projects">
          <h1
            className="text-center py-3"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Projects
          </h1>
          <div className="row ">
            <div className="col-sm-6">
              <div
                class="card mb-3 text-bg-light"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
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
              <div
                class="card mb-3"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
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
        <div id="skills" className="container-fluid skills">
          <h1 className="text-center py-3">Skills</h1>
          <div className="row">
            <div className="col-sm">
              <div id="skill-icon">
                <img
                  src={jsIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                />
                <img
                  src={nodeIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1100"
                />
                <img
                  src={angularIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                />
                <img
                  src={reactIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1300"
                />
                <img
                  src={expressIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1400"
                />
                <img
                  src={mongodbIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                />
                <img
                  src={ejsIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1600"
                />
                <img
                  src={htmlcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1700"
                />
                <img
                  src={cssIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1800"
                />
                <img
                  src={bootstrapIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1900"
                />
                <img
                  src={npmIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                />
              </div>
            </div>
          </div>
        </div>
        {/* CONTACT SECTION */}
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
