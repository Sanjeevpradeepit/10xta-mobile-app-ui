import {Dimensions, PixelRatio, Platform} from 'react-native';

export let SCREEN_HEIGHT = Dimensions.get('window').height;
export let SCREEN_WIDTH = Dimensions.get('window').width;

export const IsIOS = Platform.OS === 'ios';
export const IsAndroid = Platform.OS === 'android';

export const windowHeight = (height: number | string): number => {
  const tempHeight = typeof height === 'number' ? height : parseFloat(height);
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * tempHeight) / 100);
};

export const windowWidth = (width: number | string): number => {
  const tempWidth = typeof width === 'number' ? width : parseFloat(width);
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * tempWidth) / 100);
};

export const fontSizes = {
  FONT1: windowWidth(1),
  FONT2: windowWidth(2),
  FONT2HALF: windowWidth(2.5),
  FONT3: windowWidth(3),
  FONT3HALF4: windowWidth(3.1),
  FONT3HALF: windowWidth(3.5),
  FONT3HALF1: windowWidth(3.7),
  FONT3HALF5: windowWidth(3.6),
  FONT2HALF1: windowWidth(2.6),
  FONT2HALF2: windowWidth(2.8),

  FONT3HALF3: windowWidth(3.3),
  FONT4: windowWidth(4),
  FONT4HALF: windowWidth(4.5),
  FONT4HALF1: windowWidth(4.3),
  FONT4HALF2: windowWidth(4.7),
  FONT4HALF3: windowWidth(4.1),
  FONT5: windowWidth(5),
  FONT5HALF1: windowWidth(5.3),
  FONT5HALF: windowWidth(5.5),
  FONT6: windowWidth(6),
  FONT6HALF: windowWidth(6.5),
  FONT7: windowWidth(7),
  FONT7HALF: windowWidth(7.5),
  FONT8: windowWidth(8),
  FONT9: windowWidth(9),
  FONT9HALF: windowWidth(9.5),
  FONT10: windowWidth(10),
  FONT10HALF: windowWidth(10.5),
  FONT12: windowWidth(12),
  FONT12HALF: windowWidth(12.5),
  FONT13: windowWidth(13),
  FONT13HALF: windowWidth(13.5),
  FONT14: windowWidth(14),
  FONT14HALF: windowWidth(14.5),
  FONT15: windowWidth(15),
  FONT15HALF: windowWidth(15.5),
  FONT16: windowWidth(16),
  FONT16HALF: windowWidth(16.5),
  FONT17: windowWidth(17),
  FONT17HALF: windowWidth(17.5),
};
