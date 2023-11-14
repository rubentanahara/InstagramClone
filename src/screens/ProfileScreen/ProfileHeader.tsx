import React from 'react';
import { Image, Text, View } from 'react-native';
import user from '../../assets/data/user.json';
import Button from '../../components/Button';
import styles from './styles';

const ProfileHeader: React.FC = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <Image source={{ uri: user.image }} style={styles.avatar} />

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>198</Text>
          <Text>Followers</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>298</Text>
          <Text>Following</Text>
        </View>
      </View>
      <Text style={styles.username}>{user.name}</Text>
      <Text>{user.bio}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Button
          text='Edit Profile'
          onPress={(): void => console.warn('edit profile')}
        />
        <Button
          text='Edit Profile'
          onPress={(): void => console.warn('edit profile')}
        />
      </View>
    </View>
  );
};

export default ProfileHeader;
