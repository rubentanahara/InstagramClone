import React, { useState, FunctionComponent } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import colors from '../../assets/theme/colors';

const FooterReplyInput: FunctionComponent = () => {
  const [comment, setComment] = useState<string>('');
  const emojis = ['❤️', '🙌', '🔥', '👏', '😢', '😍', '😮', '😂'];

  const handleCreateComment = (): void => {
    console.warn('posting comment: ', comment);
    setComment('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.divider}></View>
      <View style={styles.wrapper}>
        <View style={styles.emojisWrapper}>
          {emojis.map(emoji => (
            <Text key={emoji} style={styles.emoji}>
              {emoji}
            </Text>
          ))}
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.iconWrapper}></View>
          <BottomSheetTextInput
            multiline
            value={comment}
            onChangeText={setComment}
            placeholder="Add a comment for user..."
            style={styles.textInput}
          />
          <Pressable
            onPress={handleCreateComment}
            style={styles.iconWrapper}></Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  divider: {
    backgroundColor: colors.grey,
    height: 0.5,
  },
  emoji: { fontSize: 20 },
  emojisWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 5,
    width: '100%',
  },
  iconWrapper: {
    aspectRatio: 1,
    backgroundColor: 'grey',
    borderRadius: 50,
    height: 45,
  },
  inputWrapper: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderColor: colors.grey,
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    width: '70%',
  },
  wrapper: { height: 110, padding: 10, width: '100%' },
});

export default FooterReplyInput;
