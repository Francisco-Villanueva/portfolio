import React from "react";
import "./Works.css";
import todo from "../imgs/todo.png";
import crypto from "../imgs/crypto.png";
export default function Works() {
  return (
    <section className="section works-section">
      <h2>Projects</h2>
      <div className="works-main">
        <div className="work-container">
          <div className="work-img-cont">
            <iframe
              src="https://santa-cecilia.vercel.app/"
              title="Mi Proyecto"
            />
          </div>
          <div className="work-text">
            <h3>Santa Cecilia </h3>
          </div>
        </div>
        <div className="work-container">
          <div className="work-img-cont">
            <img src={todo} alt="eccomerce photo" />
          </div>
          <div className="work-text">
            <h3>To Do List </h3>
          </div>
        </div>
        <div className="work-container">
          <div className="work-img-cont">
            <img src={crypto} alt="eccomerce photo" />
          </div>
          <div className="work-text">
            <h3>Crpyto </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
