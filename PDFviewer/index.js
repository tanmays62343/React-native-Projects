/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import UsersListScreen from './src/screens/UsersListScreen';

AppRegistry.registerComponent(appName, () => UsersListScreen);
