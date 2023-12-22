import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh, Vector3Tuple } from "three";
import { Color } from "three";

type Props = {
  position?: Vector3Tuple;
  color?: Color | string;
};

const Cube = ({ position = [0, 0, 0], color = new Color("orange") }: Props) => {
  const ref = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    const mesh = ref.current;
    mesh.rotation.x += delta * 0.1;
    mesh.rotation.y += delta * 2;
    mesh.rotation.z += delta * 3;

    mesh.position.z = Math.sin(state.clock.elapsedTime) * 2;
  });

  const meshColor = typeof color === "string" ? new Color(color) : color;

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry />
      <meshStandardMaterial color={meshColor} />
    </mesh>
  );
};

export default Cube;
