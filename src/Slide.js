import React, { useState } from "react";
import { FaAngleDoubleRight } from "@react-icons/all-files/fa/FaAngleDoubleRight";
import useFetchData from "./useFetchData";

const Slide = () => {
  const [tabBody, setTabBody] = useState(0);
  useFetchData();

  const { dates, duties, title, company } = tabSlide[tabBody];
  return (
    <section className="section">
      {/* {tabSlide.map((slides, index) => {
        return (
          <div className="btn-container">
            <button type="button" className="btn" key={slides.id}>
              {slides.company}
            </button>
          </div>
        );
      })} */}

      {/* TabBody */}
      <article>
        <h3 className="title">{title}</h3>
        <h4 className="company">{company}</h4>
        <p className="dates">{dates}</p>

        {duties.map((index) => {
          return <FaAngleDoubleRight />;
        })}
      </article>
    </section>
  );
};

export default Slide;
