import { Component } from "react";
import "./Contact.css"
import myImage from "../assets/myImage.png";
class Contact extends Component {
  state = {};
  render() {
    return (
      <>
      <div className="footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" className="wave"><path
            fill="#05386b"
            fill-opacity="1"
            d="M0,64L80,85.3C160,107,320,149,480,138.7C640,128,800,64,960,42.7C1120,21,1280,43,1360,53.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <div class="container">
          <div className="row">
            <div className="col-sm">
              <h1 className="text-center">Contact</h1>
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

        </div>
      </div>
        
      </>
    );
  }
}

export default Contact;
