/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './src/App';
//import form from './screens/MyForm'
import navDemo from './src/screens/NavigationDemo'
//import img from './src/screens/ImageScreen'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => navDemo);
