/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import TrackApplicationScreen from './src/screens/TrackApplicationScreen';
import CalculateSavingsScreen from './src/screens/CalculateSavingsScreen';

AppRegistry.registerComponent(appName, () => CalculateSavingsScreen);
