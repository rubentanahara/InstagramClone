import {TextStyle} from 'react-native';

type fontSize = {
  xs: number;
  s: number;
  default: number;
  md: number;
  lg: number;
  xlg: number;
  xxlg: number;
};

const size: fontSize = {
  xs: 10,
  s: 12,
  default: 14,
  md: 16,
  lg: 20,
  xlg: 24,
  xxlg: 30,
};

const weight: {[key: string]: TextStyle['fontWeight']} = {
  full: '900',
  semi: '600',
  bold: 'bold',
  normal: 'normal',
  thin: '400',
};

export default {size, weight};
