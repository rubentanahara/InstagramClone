import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import user from '../../assets/data/user.json';
import Button from '../../components/Button';
import styles from './styles';

const ProfileHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <Image source={{uri: user.image}} style={styles.avatar} />

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
      <View style={{flexDirection: 'row'}}>
        <Button
          text="Edit Profile"
          onPress={() => console.warn('edit profile')}
        />
        <Button
          text="Edit Profile"
          onPress={() => console.warn('edit profile')}
        />
      </View>
    </View>
  );
};
// TODO: Make separate Components 3.10, time stamp: 25
const ProfileScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    if (refreshing) {
      setRefreshing(false);
    }
  }, [refreshing]);
  return (
    <FlatList
      refreshing={refreshing}
      onRefresh={() => setRefreshing(true)}
      showsVerticalScrollIndicator={false}
      data={user.posts}
      renderItem={({item}) => (
        <Image
          key={item.id}
          source={{uri: item.image || item?.images[0]}}
          style={{flex: 1, aspectRatio: 1, maxWidth: '33.33%', margin: 1}}
        />
      )}
      numColumns={3}
      ListHeaderComponent={ProfileHeader}
    />
  );
};

export default ProfileScreen;
