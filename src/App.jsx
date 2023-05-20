import { Suspense, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Components/Experience/Experience";
import { Loader } from "@react-three/drei";

function App() {
  const [startWebsite, setStartWebsite] = useState(false);

  return (
    <div className="App">
      <button
        className="startButton"
        onClick={() => {
          setStartWebsite(!startWebsite);
        }}
      >
        {startWebsite ? "stop website" : "start website"}
      </button>
      <div className="mainExperienceCanvas">
        <Suspense fallback={null}>
          <Canvas camera={{ fov: 55, position: [0, 0, 4] }}>
            <Experience startWebsite={startWebsite} />
          </Canvas>
        </Suspense>
        <Loader
          dataInterpolation={(p) => `Loading...`} // Text
          initialState={(active) => active} // Initial black out state
        />
      </div>
    </div>
  );
}

export default App;
