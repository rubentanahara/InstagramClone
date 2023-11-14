import React, { useState } from 'react';
import { Pressable } from 'react-native';

interface IDoublePressableProps {
  onDoublePress?: () => void;
  children: React.ReactNode;
}

const DoublePressable = ({
  onDoublePress,
  children,
}: IDoublePressableProps) => {
  const [lastPressTime, setLastPressTime] = useState(0);
  // this is the handler for the double press

  const handleDoublePress = () => {
    const currentTime = new Date().getTime();
    const delta = currentTime - lastPressTime;
    const DOUBLE_PRESS_DELAY = 450;

    if (delta < DOUBLE_PRESS_DELAY) {
      onDoublePress && onDoublePress();
    }

    setLastPressTime(currentTime);
  };

  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};

export default DoublePressable;
