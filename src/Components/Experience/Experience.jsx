import {
  ContactShadows,
  Environment,
  Float,
  Html,
  OrbitControls,
  PresentationControls,
  Text,
  useGLTF,
  useHelper,
} from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import React, { useRef } from "react";

function Experience({ startWebsite }) {
  // const backgroundControls = useControls("background", {
  //   color: "red",
  // });

  // const shadowControls = useControls("shadow", {
  //   opacity: { value: 0.4, min: 0.01, max: 1 },
  //   scale: { value: 5, min: 0, max: 10 },
  //   blur: { value: 2.4, min: 0.1, max: 5 },
  // });

  // const websiteControls = useControls("webiste", {
  //   scale: { min: -2, max: 2, value: 0.87 },
  //   positionX: { min: -2, max: 2, value: 0 },
  //   positionY: { min: -2, max: 2, value: 1.52 },
  //   positionZ: { min: -2, max: 2, value: -1.38 },
  //   rotationX: { min: -2, max: 2, value: -0.26 },
  // });

  // const rectLightControls = useControls("rectLight", {
  //   intensity: { min: 0, max: 20, value: 8.5 },
  //   color: "#ff014f",
  // });

  const laptopModel = useGLTF("./models/macbookModel.gltf");

  return (
    <>
      {/* <Perf position={"top-left"} /> */}

      <color args={["#ff014f"]} attach={"background"} />

      {/* <OrbitControls /> */}

      <Environment preset="city" />

      <PresentationControls
        global
        rotation={[0.13, 0.5, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0}>
          <primitive
            object={laptopModel.scene}
            position-y={-1.2}
            rotation={[0.1, 0, 0]}
          >
            <rectAreaLight
              width={2.5}
              height={1.65}
              intensity={8.5}
              color={"#ff014f"}
              rotation={[0.1, Math.PI, 0]}
              position={[0, 1.4, -1.15]}
            />
            {startWebsite ? (
              <Html
                transform
                wrapperClass="inner-Page"
                distanceFactor={0.87}
                position={[0, 1.52, -1.38]}
                rotation-x={-0.26}
              >
                <iframe src="https://portfolio2023-chetan-kk.vercel.app/"></iframe>
              </Html>
            ) : undefined}
          </primitive>
          <Text
            font="./fonts/poppins-v20-latin-700.woff"
            position={[2, 0.5, 0.5]}
            rotation={[0, -Math.PI / 2, 0]}
            maxWidth={2}
            lineHeight={1}
            fontSize={0.7}
          >
            Chetan Khulage
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.5} />
    </>
  );
}

export default Experience;
