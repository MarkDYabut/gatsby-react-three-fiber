import React, { useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Rocks() {
  const gltf = useLoader(GLTFLoader, "/portalsmasks/models/rocks.glb");

  return (
    <primitive object={gltf.scene} />
  )
}