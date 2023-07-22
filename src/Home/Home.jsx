import { Component } from "react";
import myImage from "../assets/me3.jpg";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="head">
          <div class="container-fluid">
            <div class="row mx-auto">
              <div class="col-sm  pt-5">
                <h1 className="header fw-bolder">
                  I'm Saran, and I am a <br />{" "}
                  <span style={{ color: "white" }}>
                    <Typewriter
                      words={[
                        "Web Developer",
                        "Graphic Designer",
                        "UI/UX Designer",
                        "Content Creater",
                      ]}
                      loop={5}
                      cursor
                      cursorStyle="|"
                      typeSpeed={150}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
              </div>
              <div class="col-sm text-center  pt-5">
                <img
                  src={myImage}
                  class="img-fluid myImage w-75"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm text-center  pt-5">
                {" "}
                <img
                  src={myImage}
                  class="img-fluid myImage w-75"
                  alt=""
                  srcset=""
                />
                <p className="fs-6  px-3 pt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Error dolorem molestias exercitationem eligendi in atque modi,
                  esse sunt quisquam expedita autem corporis adipisci itaque,
                  mollitia nulla quod reiciendis laudantium. Ab. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Error dolorem
                  molestias exercitationem eligendi in atque modi, esse sunt
                  quisquam expedita autem corporis adipisci itaque, mollitia
                  nulla quod reiciendis laudantium. Ab.
                </p>
              </div>
              <div className="col-sm text-center  pt-5">
                {" "}
                <img
                  src={myImage}
                  class="img-fluid myImage w-75"
                  alt=""
                  srcset=""
                />
                <p className="fs-6 px-3 pt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Error dolorem molestias exercitationem eligendi in atque modi,
                  esse sunt quisquam expedita autem corporis adipisci itaque,
                  mollitia nulla quod reiciendis laudantium. Ab. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Error dolorem
                  molestias exercitationem eligendi in atque modi, esse sunt
                  quisquam expedita autem corporis adipisci itaque, mollitia
                  nulla quod reiciendis laudantium. Ab.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm"><h1 className="text-center">Contact</h1></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
