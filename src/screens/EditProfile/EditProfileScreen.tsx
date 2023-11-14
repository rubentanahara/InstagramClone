import React from 'react';
import { useForm } from 'react-hook-form';
import { Image, Text, View } from 'react-native';
import user from '../../assets/data/user.json';
import { IEditableUser } from '../../types/interfaces';
import CustomInput from './CustomInput';
import styles from './styles';

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const EditProfileScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {},
  } = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user?.website,
      bio: user?.bio,
    },
  });

  const onSubmit = (data: IEditableUser): void => {
    console.log('submit', data);
  };

  return (
    <View style={styles.page}>
      <Image source={{ uri: user.image }} style={styles.avatar} />
      <Text style={styles.textButton}>Change profile photo</Text>
      <CustomInput
        label={'Name'}
        control={control}
        name={'name'}
        rules={{ required: 'Name is required' }}
      />
      <CustomInput
        label={'Username'}
        control={control}
        name={'username'}
        rules={{
          required: 'Username is required',
          minLegth: { value: 3, message: 'min 3 characteres' },
        }}
      />
      <CustomInput
        label={'Website'}
        control={control}
        name={'website'}
        rules={{
          required: 'Website is required',
          pattern: URL_REGEX,
        }}
      />
      <CustomInput
        label={'Bio'}
        multiline={true}
        control={control}
        name={'bio'}
        rules={{ required: 'Bio is required' }}
      />
      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};

export default EditProfileScreen;
