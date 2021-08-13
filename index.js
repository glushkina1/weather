/**
 * @format
 */
import React from "react";
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppWrapper from "./src/Appwrapper";

AppRegistry.registerComponent(appName, () => AppWrapper);
