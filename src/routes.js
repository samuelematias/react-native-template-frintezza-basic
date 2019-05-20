import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';

const MainStack = createStackNavigator(
  {
    Main: { screen: Main }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Main'
  }
);

const Routes = createStackNavigator(
  {
    MainStack: { screen: MainStack }
  },
  {
    headerMode: 'none',
    initialRouteName: 'MainStack',
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default createAppContainer(Routes);
