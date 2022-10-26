/**
 * @format
 */
import React from 'react';
import { View,Text } from 'react-native';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import MainScreen from './screens/MainScreen';

AppRegistry.registerComponent(appName, () => MainScreen);
