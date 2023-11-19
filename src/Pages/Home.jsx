import { Canvas } from "@react-three/fiber";
import * as React from "react";
import { Suspense, useState, useRef,useEffect } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
// import sky from "../models/sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import Homeinfo from "../components/Homeinfo";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";
import Sky from "../models/Sky";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isrotating, setIsrotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      // screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      // screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition, rotation];
  };
  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustBiplaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <Homeinfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isrotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={3} />
          <ambientLight intensity={0.5} />

          <hemisphereLight
            skycolor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          {/* <sj isrotating={isrotating} /> */}
          <Sky isrotating={isrotating}/>
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isrotating={isrotating}
            setIsrotating={setIsrotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isrotating={isrotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img src={!isPlayingMusic ? soundoff :soundon} alt="sound" 
        className="w-10 h-10 cursor-pointer object-contain"
        onClick={()=> setIsPlayingMusic(!isPlayingMusic)}
        />
        
      </div>

    </section>
  );
};

export default Home;
