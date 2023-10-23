import React, { useState } from "react";
import { View, Pressable, StyleSheet } from "react-native";
import Video from "react-native-video";
import Ionicons from "react-native-vector-icons/Ionicons";

interface IVideoPlayer {
    uri: string;
    paused: boolean;
}

const VideoPlayer = ({ uri, paused }: IVideoPlayer) => {
    const [muted, setMuted] = useState(true);
    return (
        <View>
            <Video
                source={{ uri }}
                style={styles.video}
                resizeMode="cover"
                repeat
                muted={muted}
                paused={paused}
            />
            <Pressable
                onPress={() => setMuted(prev => !prev)}
                style={styles.muteButton}
            >
                <Ionicons name={muted ? "volume-mute" : "volume-high"}
                    size={14}
                    color="white" />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    video: {
        width: "100%",
        aspectRatio: 1,
    },
    muteButton: {
        position: "absolute",
        padding: 10,
        borderRadius: 40,
        backgroundColor: "rgba(10,10,10,0.4)",
        bottom: 10,
        right: 10,
    },
});

export default VideoPlayer;
