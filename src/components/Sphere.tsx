import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import type { Mesh, Vector3Tuple } from "three";
import { Color } from "three";

type Props = {
  position?: Vector3Tuple;
  color?: Color | string;
};

const Sphere = ({ position = [0, 0, 0], color = "orange" }: Props) => {
  const ref = useRef<Mesh>(null!);
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  useFrame((_, delta) => {
    const mesh = ref.current;

    const speed = click ? 1 : 0.2;
    mesh.rotation.y += delta * speed;
  });
  const meshColor = typeof color === "string" ? new Color(color) : color;

  return (
    <mesh
      ref={ref}
      position={position}
      scale={hover ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      onClick={() => setClick(!click)}
    >
      <sphereGeometry args={[1, 30, 30]} />
      <meshStandardMaterial color={meshColor} wireframe />
    </mesh>
  );
};

export default Sphere;
