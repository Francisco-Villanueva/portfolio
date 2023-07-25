import React from "react";
import "./Works.css";
import projects from "../mocks/data";

export default function Works() {
  return (
    <section className="section works-section">
      <h2>PROJECTS </h2>
      <div className="works-main">
        {projects.map((m) => (
          <div className="work-container" key={m.id}>
            <div className="work-img-cont">
              <img src={m.img} alt={m.title} />
            </div>
            <div className="work_text">
              <h3>{m.title}</h3>
              <div className="description_container">
                <span>{m.description.short}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
