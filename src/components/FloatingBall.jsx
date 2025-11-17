import React, { useEffect, useState } from "react";
import soccerBall from "../assets/FB.png";

const FloatingBall = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <img
        src={soccerBall}
        alt="Soccer Ball"
        style={{
          width: "40px",
          height: "40px",
          userSelect: "none",
        }}
      />
    </div>
  );
};

export default FloatingBall;
