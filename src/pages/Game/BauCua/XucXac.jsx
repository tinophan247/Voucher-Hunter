import React, { Fragment } from "react";
import { useSpring, animated } from "react-spring";
import "./Baucua.css";

const XucXac = ({diceItem}) => {
  const [propsDice, set] = useSpring(() => ({
    to: {
      xyz: [1800, 1800, 1800],
    },
    from: {
      xyz: [0, 0, 0],
    },
    config: {
      duration: 1000,
    },
    reset: true,
  }));

  set({ xyz: [1800, 1800, 1800] });

  return (
    <Fragment>
      <div className="scene ml-[55px]">
        <animated.div
          className="cube"
          style={{
            transform: propsDice.xyz.interpolate(
              (x, y, z) =>
                `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
            ),
          }}
        >
          <div className="cube__face front">
            <img
              src={diceItem.img}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="cube__face back">
            <img
              src="./img/gameBauCua/cua.png"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="cube__face right">
            <img
              src="./img/gameBauCua/tom.png"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="cube__face left">
            <img
              src="./img/gameBauCua/ca.png"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="cube__face top">
            <img
              src="./img/gameBauCua/ga.png"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="cube__face bottom">
            <img
              src="./img/gameBauCua/nai.png"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
        </animated.div>
      </div>
    </Fragment>
  );
};

export default XucXac;
