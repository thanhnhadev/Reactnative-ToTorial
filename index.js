/**
 * @format
 */
import React from 'react';
import { View,Text } from 'react-native';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import Wellcome from './Component/screens/Wellcome';

AppRegistry.registerComponent(appName, () => Wellcome);
