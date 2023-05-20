import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Components/Experience/Experience";

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
        <Canvas camera={{ fov: 55, position: [0, 0, 4] }}>
          <Experience startWebsite={startWebsite} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
