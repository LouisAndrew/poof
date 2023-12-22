import { useGLTF } from "@react-three/drei";
import type { Vector3 } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    buns: THREE.Mesh;
    mustard: THREE.Mesh;
    sausage: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
  };
};

type Props = JSX.IntrinsicElements["group"] & {
  scale: Vector3;
};

export const Hotdog = (props: Props) => {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials } = useGLTF("/hotdog-transformed.glb") as GLTFResult;

  useFrame(({ clock }, delta) => {
    group.current.rotation.y += delta * 0.5;
    group.current.position.y = Math.sin(clock.elapsedTime) * 0.2;
  });

  return (
    <group ref={group}>
      <group {...props} dispose={null} rotation={[0.7, 0.99, 0.8]}>
        <mesh
          geometry={nodes.buns.geometry}
          material={materials["Material.001"]}
          position={[-0.032, 1.985, 3.931]}
          scale={[1.001, 1, 1.003]}
        />
        <mesh
          geometry={nodes.mustard.geometry}
          material={materials["Material.004"]}
          position={[-0.042, 10.842, 28.297]}
          rotation={[-1.477, -0.017, -0.006]}
          scale={[0.986, 2.277, 0.151]}
        />
        <mesh
          geometry={nodes.sausage.geometry}
          material={materials["Material.005"]}
          position={[-0.979, 5.655, 3.754]}
          scale={[2.969, 0.267, 0.25]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/hotdog-transformed.glb");
