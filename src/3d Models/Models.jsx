import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import Animatenames from "../../public/spiderman/Animate";
import Spiderman from "../../public/spiderman/Spiderman";
import { Button } from "@nextui-org/react";
import AnimeName from "../../public/spiderman/AnimeName";

// import Pubg from "../public/pubg/Pubg";
// import Scene from "../public/bird/Scene";

const Models = () => {
  const [Animations] = useState(Animatenames[1].SubName);
  const [animationall, setAnimationall] = useState(Animations[0]);

  // console.log(emoteTitle);
  // console.log(animatenames)

  return (
    <div className="flex w-full h-full flex-row-reverse">
      <Canvas
        camera={{ fov: 70 }}
        style={{ display: "flex", background: "black", height: "100%" }}
      >
        <Suspense fallback={null}>
          <ScrollControls damping={0.5} pages={5}>
            {/* <Pubg />
              <Scene /> */}
            <Spiderman animationall={animationall} />
          </ScrollControls>
          {/* <OrbitControls  /> */}
          <ambientLight intensity={2.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          {/* <OrbitControls enablePan={true} enableDamping={true} enableZoom={true} enableRotate={true} /> */}
        </Suspense>
      </Canvas>
      <div className="absolute grid w-28 right-0">
      {AnimeName.map((data, index) => {
          return (
            <div className="w-18 " key={index}>
              <Button className="w-full  right-10px active:bg-red-400"
                color="primary"
                variant="bordered" onClick={e => setAnimationall(data.AnimeId)}>{data.name} </Button>
                <button className="bg-white"> Hello</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Models;
