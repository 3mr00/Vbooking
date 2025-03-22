"use client";
import React, { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "./animation.json";

const LottieAnimation = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null); // Reference to the Lottie instance

  // Pause the animation on hover
  const handleMouseEnter = () => {
    if (lottieRef.current) {
      lottieRef.current.pause();
    }
  };

  // Resume the animation when the mouse leaves
  const handleMouseLeave = () => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
    </div>
  );
};

export default LottieAnimation;
