import { Dimensions, Platform, PixelRatio } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();
const vw = width / 100;
const vh = height / 100;
const pw = width => width * vw; // percent width
const ph = height => height * vh; // percent height

const size = size => {
  if (Platform.OS === 'ios') {
    if (pixelRatio === 2 && vw === 3.2) {
      // 5, SE
      return size * 1;
    } else if (pixelRatio === 2 && vw === 3.75) {
      // 6, 7, 8
      return size * 1.1;
    } else if (pixelRatio === 2 && vw === 4.14) {
      // XR
      return size * 1.2;
    } else if (pixelRatio === 3 && vw === 4.14) {
      // 6, 7, 8 plus
      return size * 1.2;
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

const keyboardVerticalOffset = offset => {
  if (Platform.OS === 'ios') {
    if (pixelRatio === 2 && vw === 3.2) {
      // 5, SE
      return offset;
    } else if (pixelRatio === 2 && vw === 3.75) {
      // 6, 7, 8
      return offset - 100;
    } else if (pixelRatio === 2 && vw === 4.14) {
      // XR
      return offset - 150;
    } else if (pixelRatio === 3 && vw === 4.14) {
      // 6, 7, 8 plus
      return offset - 150;
    } else if (pixelRatio === 3 && vw === 3.75) {
      // X, XS
      return offset - 200;
    } else if (pixelRatio === 3 && vw === 4.14) {
      // XS Max
      return offset - 200;
    } else {
      return offset - 100;
    }
  } else {
    if (pixelRatio <= 1) {
      return offset;
    } else if (pixelRatio <= 1.5) {
      return offset;
    } else if (pixelRatio <= 2) {
      return offset + 20;
    } else if (pixelRatio <= 3) {
      return offset + 50;
    } else if (pixelRatio <= 3.5) {
      return offset + 100;
    } else {
      return offset;
    }
  }
};

const metrics = {
  //Example how use:
  // /**
  //  * yourScreenMetrics
  //  */
  // yourScreenMetrics: {
  //   keyboardVerticalOffset: keyboardVerticalOffset(-50),
  //   container: {
  //     marginTop: ph(8),
  //     height: size(40),
  //     width: pw(72)
  //   }
  // }
};

export default metrics;
