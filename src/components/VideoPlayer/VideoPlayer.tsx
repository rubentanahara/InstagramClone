import React from "react";
import { View, Pressable, ViewToken, ViewabilityConfig } from "react-native";
import Video from "react-native-video";
import Ionicons from "react-native-vector-icons/Ionicons";

interface IVideoPlayer {
    uri: string;
    paused: boolean;
}

const VideoPlayer = ({ uri, paused }: IVideoPlayer) => {
    const [muted, setMuted] = React.useState(true);

    return (
        <View>
            <Video
                source={{ uri }}
                style={{ width: "100%", aspectRatio: 1 }}
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
                    size={12}
                    color="white" />
            </Pressable>
        </View>
    );
};

const styles = {
    muteButton: {
        position: "absolute",
        padding: 10,
        borderRadius: 40,
        backgroundColor: "rgba(10,10,10,0.4)",
        bottom: 10,
        right: 10,
    },
};

export default VideoPlayer;