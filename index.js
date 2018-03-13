import React from 'react';
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import configStore from "./src/store/configStore";

const store = configStore();

const AwesomePlaces = () => (
    <Provider store={store}><App/></Provider>
);

AppRegistry.registerComponent('AwesomePlaces', () => AwesomePlaces);
