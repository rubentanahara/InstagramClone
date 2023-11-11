import React from 'react';
import {Control, Controller, useForm} from 'react-hook-form';
import {Image, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import user from '../../assets/data/user.json';
import colors from '../../assets/theme/colors';
import {IUser} from '../../types/interfaces';
import styles from './styles';

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserField>;

interface ICustomInput {
  label: string;
  multiline?: boolean;
  name: IEditableUserField;
  control: Control<IEditableUser, object>;
  rules?: object;
}

const CustomInput = ({
  label,
  multiline = false,
  name,
  control,
  rules = {},
}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={{flex: 1}}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={label}
              style={[
                styles.input,
                {borderColor: error ? colors.error : colors.black},
              ]}
              multiline={multiline}
            />
            {error && (
              <Text style={{color: colors.error}}>
                {error.message || 'Error'}
              </Text>
            )}
          </View>
        </View>
      );
    }}
  />
);

const EditProfileScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user?.website,
      bio: user?.bio,
    },
  });

  const onSubmit = (data: IEditableUser) => {
    console.log('submit', data);
  };

  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change profile photo</Text>
      <CustomInput
        label={'Name'}
        control={control}
        name={'name'}
        rules={{required: 'Name is required'}}
      />
      <CustomInput
        label={'Username'}
        control={control}
        name={'username'}
        rules={{
          required: 'Username is required',
          minLegth: {value: 3, message: 'min 3 characteres'},
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
        rules={{required: 'Bio is required'}}
      />
      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};

export default EditProfileScreen;
