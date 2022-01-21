import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro({ menuOpen }) {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Full-Stack Developer", "Frontend Developer", "Javascript Developer" ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className={"imgContainter " + (menuOpen && "active")}>
          <img
            src="assets/pedro.png"
            alt="Pedro standing with his arms crossed wearing a white hoodie"
          ></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello! I'm</h2>
          <h1>Pedro Delgadillo</h1>
          <h3>
            Looking to hire a <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down arrow" />
        </a>
      </div>
    </div>
  );
}
