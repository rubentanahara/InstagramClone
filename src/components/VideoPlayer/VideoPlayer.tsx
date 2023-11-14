/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IVideoPlayer {
  uri: string;
  paused: boolean;
}

const VideoPlayer: React.FC<IVideoPlayer> = ({ uri, paused }) => {
  const [muted, setMuted] = useState(true);
  return (
    <View>
      <Video
        source={{ uri }}
        style={styles.video}
        resizeMode='cover'
        repeat
        muted={muted}
        paused={paused}
      />
      <Pressable
        onPress={() => setMuted((prev) => !prev)}
        style={styles.muteButton}
      >
        <Ionicons
          name={muted ? 'volume-mute' : 'volume-high'}
          size={14}
          color='white'
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  muteButton: {
    backgroundColor: 'rgba(10,10,10,0.4)',
    borderRadius: 40,
    bottom: 10,
    padding: 10,
    position: 'absolute',
    right: 10,
  },
  video: {
    aspectRatio: 1,
    width: '100%',
  },
});

export default VideoPlayer;
