import {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import colors from '../../assets/theme/colors';

const FooterReplyInput = () => {
  const [comment, setComment] = useState('');
  const emojis = ['❤️', '🙌', '🔥', '👏', '😢', '😍', '😮', '😂'];

  const handleCreateComment = () => {
    console.warn('posting commen: ', comment);
    setComment('');
  };
  // TODO: Check vadim video about input 3.9
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <View style={styles.wrapper}>
        <View style={styles.emojisWrapper}>
          {emojis.map((e, index) => (
            <Text key={index} style={styles.emoji}>
              {e}
            </Text>
          ))}
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View
            style={{
              backgroundColor: 'grey',
              borderRadius: 50,
              height: 45,
              aspectRatio: 1,
            }}></View>
          <BottomSheetTextInput
            multiline
            value={comment}
            onChangeText={setComment}
            placeholder="Add a comment for user..."
            style={{
              borderWidth: 1,
              borderColor: colors.grey,
              borderRadius: 20,
              padding: 10,
              width: '70%',
            }}
          />
          <Pressable
            onPress={handleCreateComment}
            style={{
              backgroundColor: 'grey',
              borderRadius: 50,
              height: 45,
              aspectRatio: 1,
            }}></Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: colors.white,
  },
  divider: {
    height: 0.5,
    backgroundColor: colors.grey,
  },
  wrapper: {width: '100%', height: 110, padding: 10},
  emojisWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 5,
    marginBottom: 10,
  },
  emoji: {fontSize: 20},
};
export default FooterReplyInput;
