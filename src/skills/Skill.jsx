import { Component } from "react";
import "./Skill.css";
class Skill extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="skill text-center">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm">
                <h1>Technical skills</h1>
                <ul className="skill-list text-center ">
                  <li className="list-group-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="25"
                      height="25"
                      viewBox="0,0,256,256"
                      style={{ fill: "#00000" }}
                    >
                      <g
                        fill="none"
                        fill-rule="nonzero"
                        stroke="none"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-dasharray=""
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                        style={{ mixBlendMode: "normal" }}
                      >
                        <g transform="scale(5.33333,5.33333)">
                          <path
                            d="M41,5h-34l3,34l14,4l14,-4l3,-34z"
                            fill="#5cdb95"
                          ></path>
                          <path
                            d="M24,8v31.9l11.2,-3.2l2.5,-28.7z"
                            fill-opacity="0.74118"
                            fill="#5cdb95"
                          ></path>
                          <path
                            d="M24,25v-4h8.6l-0.7,11.5l-7.9,2.6v-4.2l4.1,-1.4l0.3,-4.5zM32.9,17l0.3,-4h-9.2v4z"
                            fill-opacity="0.8902"
                            fill="#05386b"
                          ></path>
                          <path
                            d="M24,30.9v4.2l-7.9,-2.6l-0.4,-5.5h4l0.2,2.5zM19.1,17h4.9v-4h-9.1l0.7,12h8.4v-4h-4.6z"
                            fill="#003364"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <span>HTML</span>
                  </li>
                  <li className="list-group-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M2 12.1333C2 8.58633 2 6.81283 2.69029 5.45806C3.29749 4.26637 4.26637 3.29749 5.45806 2.69029C6.81283 2 8.58633 2 12.1333 2H19.8667C23.4137 2 25.1872 2 26.5419 2.69029C27.7336 3.29749 28.7025 4.26637 29.3097 5.45806C30 6.81283 30 8.58633 30 12.1333V19.8667C30 23.4137 30 25.1872 29.3097 26.5419C28.7025 27.7336 27.7336 28.7025 26.5419 29.3097C25.1872 30 23.4137 30 19.8667 30H12.1333C8.58633 30 6.81283 30 5.45806 29.3097C4.26637 28.7025 3.29749 27.7336 2.69029 26.5419C2 25.1872 2 23.4137 2 19.8667V12.1333Z"
                          fill="#5cdb95"
                        />{" "}
                        <path
                          d="M15.5686 19.5963H11.2297L10.3469 22.409C10.3224 22.5135 10.2262 22.5875 10.1215 22.5823H7.92384C7.79851 22.5823 7.75469 22.5117 7.79236 22.3704L11.549 11.2738C11.5866 11.1582 11.6242 11.0266 11.6617 10.8789C11.7109 10.6218 11.736 10.3606 11.7369 10.0987C11.7261 10.0213 11.7941 9.95294 11.8683 9.96378H14.8549C14.9424 9.96378 14.9924 9.9959 15.0051 10.0601L19.269 22.3897C19.3065 22.5182 19.269 22.5824 19.1563 22.5823H16.7144C16.6288 22.5921 16.547 22.5334 16.5266 22.4475L15.5686 19.5963ZM11.9059 17.1689H14.8737C14.3861 15.5027 13.8358 13.8584 13.3898 12.1793C12.9086 13.8613 12.3836 15.5365 11.9059 17.1689Z"
                          fill="#05386b"
                        />{" "}
                        <path
                          d="M21.8045 12.0058C21.6129 12.0137 21.4219 11.98 21.2438 11.907C21.0658 11.834 20.9048 11.7232 20.7714 11.582C20.6384 11.4346 20.535 11.2618 20.4673 11.0733C20.3996 10.8849 20.3689 10.6846 20.3769 10.4839C20.3701 10.2852 20.4042 10.0873 20.477 9.90305C20.5499 9.71881 20.6598 9.5524 20.7996 9.41468C20.938 9.27839 21.1014 9.17161 21.2804 9.10052C21.4593 9.02942 21.6502 8.99543 21.842 9.00049C22.2929 9.00049 22.6466 9.13856 22.9033 9.41468C23.0329 9.55818 23.1336 9.72648 23.1997 9.90995C23.2657 10.0934 23.2959 10.2885 23.2883 10.4839C23.2962 10.6853 23.2645 10.8864 23.1951 11.075C23.1258 11.2636 23.0201 11.436 22.8845 11.582C22.7428 11.7253 22.5736 11.8369 22.3878 11.9099C22.2019 11.9828 22.0033 12.0155 21.8045 12.0058ZM20.5084 22.3896V13.181C20.5084 13.0654 20.5583 13.0076 20.6587 13.0076H22.9691C23.0691 13.0076 23.1192 13.0654 23.1193 13.181V22.3896C23.1193 22.5182 23.0692 22.5824 22.9691 22.5823H20.6775C20.5648 22.5823 20.5084 22.5181 20.5084 22.3896Z"
                          fill="#05386b"
                        />{" "}
                      </g>
                    </svg>
                    <span>HTML</span>
                  </li>
                  <li className="list-group-item">html</li>
                </ul>
              </div>
              <div class="col-sm mobile-hide">Graphic Design Skills</div>
            </div>
            <div class="row">
              <div class="col-sm">Technical skills</div>
              <div class="col-sm">Graphic Design Skills</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Skill;
