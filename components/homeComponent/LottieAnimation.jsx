"use client";
import * as data from "../../icons/src/animationHomeLogo.json";
import { useEffect, useRef } from "react";

export default function LottieAnimation() {
  let animationRef = useRef(null);

  useEffect(() => {
    if (animationRef.current) {
      async function getLottie() {
        const lot = await import("lottie-web");

        lot.default.loadAnimation({
          autoplay: true,
          loop: true,
          animationData: data,
          container: animationRef.current,
        });
      }
      getLottie();
    }
  }, [animationRef.current]);

  return <div ref={animationRef}></div>;
}
