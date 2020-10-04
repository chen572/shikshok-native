import { useState } from 'react';

export default () => {
  const [flashIdx, setFlashIdx] = useState(0);

  const flash = [
    { flashIcon: 'flash', flashValue: 'on' },
    { flashIcon: 'flash-off', flashValue: 'off' },
    { flashIcon: 'flash-auto', flashValue: 'auto' },
  ];

  const setFlashValue = () =>
    setFlashIdx((prevIdx) => (prevIdx === 2 ? 0 : prevIdx + 1));

  return { flash: flash[flashIdx], setFlashValue };
};
