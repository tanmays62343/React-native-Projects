/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import Icons from 'react-native-vector-icons/FontAwesome'

Icons.loadFont()

AppRegistry.registerComponent(appName, () => App);
