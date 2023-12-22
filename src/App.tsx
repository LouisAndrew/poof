import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Hotdog } from "./components/Hotdog";

const App = () => (
  <div className="container">
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={2} />
      <ambientLight intensity={0.5} />
      <Hotdog scale={0.02} />

      <OrbitControls />
    </Canvas>
  </div>
);

export default App;
