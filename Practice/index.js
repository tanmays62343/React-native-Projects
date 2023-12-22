/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './src/App';
import form from './components/MyForm'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => form);
