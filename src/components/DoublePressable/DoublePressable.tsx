import React, { useState } from 'react';
import { Pressable } from 'react-native';


interface IDoublePressableProps {
    onDoublePress?: () => void;
    children: React.ReactNode;
}



const DoublePressable = ({ onDoublePress, children }: IDoublePressableProps) => {
    const [lastPressTime, setLastPressTime] = useState(0);

    const handleDoublePress = () => {
        const currentTime = new Date().getTime();
        const delta = currentTime - lastPressTime;
        const DOUBLE_PRESS_DELAY = 450; // Adjust this delay as needed (in milliseconds)

        if (delta < DOUBLE_PRESS_DELAY) {
            // Handle double press action
            onDoublePress && onDoublePress();
        }

        setLastPressTime(currentTime);
    };

    return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
}

export default DoublePressable;
