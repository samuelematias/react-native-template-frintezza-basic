import { Platform, PixelRatio, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();
const vw = width / 100;

const sizeNormalize = size => {
  if (Platform.OS === 'ios') {
    if (pixelRatio === 2 && vw === 3.2) {
      // 5, SE
      return size * 1;
    } else if (pixelRatio === 2 && vw === 3.75) {
      // 6, 7, 8, // XR
      return size * 1.1;
    } else if (pixelRatio === 2 && vw === 4.14) {
      // XR
      return size * 1.3;
    } else if (pixelRatio === 3 && vw === 4.14) {
      // 6, 7, 8 plus
      return size * 1.3;
    } else if (pixelRatio === 3 && vw === 3.75) {
      // X, XS
      return size * 1.2;
    } else if (pixelRatio === 3 && vw === 4.14) {
      // XS Max
      return size * 1.3;
    } else {
      return size * 1;
    }
  } else {
    if (pixelRatio <= 1) {
      return size * 0.9;
    } else if (pixelRatio <= 1.5) {
      return size * 1;
    } else if (pixelRatio <= 2) {
      return size * 1.1;
    } else if (pixelRatio <= 3) {
      return size * 1.2;
    } else if (pixelRatio <= 3.5) {
      return size * 1.3;
    } else {
      return size * 1.1;
    }
  }
};

const lineHeight = size => {
  return Platform.select({
    ios: sizeNormalize(size),
    android: parseInt(sizeNormalize(size))
  });
};

const type = {
  //Example how use:
  // ...Platform.select({
  //   ios: {
  //     robot: {
  //       light: 'RobotoSlab-Light',
  //       regular: 'RobotoSlab-Regular',
  //       thin: 'RobotoSlab-Thin',
  //       bold: 'RobotoSlab-Bold'
  //     },
  //   },
  //   android: {
  //     robot: {
  //       light: 'RobotoSlab-Light',
  //       regular: 'RobotoSlab-Regular',
  //       thin: 'RobotoSlab-Thin',
  //       bold: 'RobotoSlab-Bold'
  //     },
  //   }
  // })
};

const size = {
  h4: sizeNormalize(28),
  h5: sizeNormalize(21),
  h6: sizeNormalize(18),
  h7: sizeNormalize(17),
  regular: sizeNormalize(16),
  regularMinus: sizeNormalize(15),
  medium: sizeNormalize(14),
  mediumMinus: sizeNormalize(13),
  small: sizeNormalize(12),
  smallMinus: sizeNormalize(11),
  tiny: sizeNormalize(10)
};

const style = {
  //Example how use:
  // /**
  //  * yourScreenFonts
  //  */
  // yourScreenFonts: {
  //  styleExample: {
  //    fontFamily: type.robot.light,
  //    fontSize: size.medium,
  //     lineHeight: lineHeight(20)
  //  }
  // },
};

export default {
  type,
  size,
  style,
  lineHeight
};
