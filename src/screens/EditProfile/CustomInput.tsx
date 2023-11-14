import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { IEditableUser, IEditableUserField } from '../../types/interfaces';
import styles from './styles';
import colors from '../../assets/theme/colors';

interface ICustomInputProps {
  label: string;
  multiline?: boolean;
  name: IEditableUserField;
  control: Control<IEditableUser>;
  rules?: { [key: string]: unknown };
}

const CustomInput: React.FC<ICustomInputProps> = ({
  label,
  multiline = false,
  name,
  control,
  rules = {},
}) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({
      field: { onChange, value, onBlur },
      fieldState: { error },
    }): React.JSX.Element => {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={{ flex: 1 }}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={label}
              style={[
                styles.input,
                { borderColor: error ? colors.error : colors.black },
              ]}
              multiline={multiline}
            />
            {error && (
              <Text style={{ color: colors.error }}>
                {error.message || 'Error'}
              </Text>
            )}
          </View>
        </View>
      );
    }}
  />
);

export default CustomInput;
