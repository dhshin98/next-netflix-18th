"use client";

import Lottie from "react-lottie-player";
import netflixJson from "../../public/json/landing-animation.json";
import { useRouter } from "next/navigation";

export const Landing = () => {
  const router = useRouter();

  return (
    <Lottie
      animationData={netflixJson}
      play
      style={{ width: 350 }}
      loop={false}
      onComplete={() => router.push("/home")}
    />
  );
};
