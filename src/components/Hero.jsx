import React from "react";
import "./Hero.css";
import Navbar from "./navbar/Navbar";
import devPhoto from "../imgs/fotoDev2.jpg";
import jsLogo from "../imgs/js.png";
import hmtlLogo from "../imgs/html.png";
import css from "../imgs/css.png";
import reactlogo from "../imgs/react.png";
import node from "../imgs/node.png";
import reduxLogo from "../imgs/redux.png";
import sequelizeLogo from "../imgs/sequelize.png";

export default function Hero() {
  return (
    <div className="section hero-main">
      <Navbar />
      <div className="body-hero">
        <div className="left-hero">
          <span>
            <b className="text-focus-in">Villanueva</b>{" "}
            <span className="tracking-in-expand "> Francisco</span>
          </span>
          <p className="scale-in-hor-left ">| Full-Stack developer</p>
          <div className="skills text-focus-in-3 ">
            <button>
              <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
                <img className="" src={jsLogo} alt="jslogo" />
                <p className="skillname">Javascript</p>
              </a>
            </button>
            <button>
              <a href="https://developer.mozilla.org/es/docs/Glossary/HTML5">
                <img src={hmtlLogo} alt="hmtlLogo" />
                <p className="skillname">HTML5</p>
              </a>
            </button>
            <button>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <img className="scale-in-ver-top-20" src={css} alt="css" />
                <p className="skillname">CSS</p>
              </a>
            </button>
            <button>
              <a href="https://es.reactjs.org/docs/getting-started.html">
                <img src={reactlogo} alt="reactlogo" />
                <p className="skillname">React</p>
              </a>
            </button>
            <button>
              <a href="https://nodejs.org/en/docs">
                <img className="scale-in-ver-top-24" src={node} alt="node" />
                <p className="skillname">Node</p>
              </a>
            </button>
            <button>
              <a href="https://react-redux.js.org/">
                <img src={reduxLogo} alt="reduxLogo" />
                <p className="skillname">Redux</p>
              </a>
            </button>
            <button>
              <a href="https://sequelize.org/">
                <img src={sequelizeLogo} alt="sequelizeLogo" />
                <p className="skillname">Sequelize</p>
              </a>
            </button>
          </div>
        </div>
        <div className="slide-in-righ right-hero ">
          <div className="img-cont">
            <img src={devPhoto} alt={"DevPhoto"} />
          </div>
        </div>
      </div>
    </div>
  );
}
