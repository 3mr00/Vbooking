"use client"; // This ensures it's client-side only

import Lottie from "lottie-react";
import animationData from "./animationHomeLogo.json";

export default function LottieAnimation() {
  return <Lottie animationData={animationData} loop />;
}
