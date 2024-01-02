/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './src/App';
//import form from './screens/MyForm'
//import navDemo from './src/screens/navigationEx/NavigationDemo'
//import img from './src/screens/ImageScreen'
import ApiCallingAxios from './src/screens/api/ApiCallingAxios';
//import ApiCallingFetch from './src/screens/api/ApiCallingFetch';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ApiCallingAxios);
