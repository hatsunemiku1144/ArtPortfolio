import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "設計",
          "插畫",
          "構圖",
          "人體",
          "結構",
          "形體",
          "光影",
          "色彩"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
