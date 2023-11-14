import React, { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { ProfileHeader } from '.';
import user from '../../assets/data/user.json';

interface Post {
  id: string;
  image?: string;
  images?: string[];
}

const ProfileScreen: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (refreshing) {
      setRefreshing(false);
    }
  }, [refreshing]);
  // TODO: Make separate Components 3.10, time stamp: 25
  return (
    <FlatList
      refreshing={refreshing}
      onRefresh={() => setRefreshing(true)}
      showsVerticalScrollIndicator={false}
      data={user.posts}
      renderItem={({ item }: { item: Post }) => (
        <Image
          key={item.id}
          source={{ uri: item.image || item?.images[0] }}
          style={{ flex: 1, aspectRatio: 1, maxWidth: '33.33%', margin: 1 }}
        />
      )}
      numColumns={3}
      ListHeaderComponent={ProfileHeader}
    />
  );
};

export default ProfileScreen;
