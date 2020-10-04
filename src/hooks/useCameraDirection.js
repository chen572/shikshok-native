import { useState } from 'react';

export default () => {
  const [cameraIdx, setCameraIdx] = useState(1);

  const camera = [
    { cameraIcon: 'camera-rear-variant', cameraValue: 'front' },
    { cameraIcon: 'camera-front-variant', cameraValue: 'back' },
  ];

  const setCameraValue = () =>
    setCameraIdx((prevValue) => (prevValue === 1 ? 0 : 1));

  return { camera: camera[cameraIdx], setCameraValue };
};
