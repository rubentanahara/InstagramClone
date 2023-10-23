import React, { useState } from 'react';
import { Pressable } from 'react-native';

// this is the interface for the props
// onDoublePress is the function that will be called when the user double press the component
// children is the component that will be rendered

interface IDoublePressableProps {
    onDoublePress?: () => void;
    children: React.ReactNode;
}


// this is the component that will handle the double press
// it will call the onDoublePress function when the user double press the component

const DoublePressable = ({ onDoublePress, children }: IDoublePressableProps) => {
    const [lastPressTime, setLastPressTime] = useState(0);
    // this is the handler for the double press


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
