/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';

import {Platform, Linking} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const RNTesterNavigationReducer = require('./RNTesterNavigationReducer');
const URIActionMap = require('./URIActionMap');

const APP_STATE_KEY = 'RNTesterAppState.v2';

export const initializeInitialState = async (context) => {
  const url = await Linking.getInitialURL();
  const [err, storedString] = await AsyncStorage.getItem(APP_STATE_KEY);
  const exampleAction = URIActionMap(context.props.exampleFromAppetizeParams);
  const urlAction = URIActionMap(url);
  const launchAction = exampleAction || urlAction;

  if (err || !storedString) {
    const initialAction = launchAction || {type: 'InitialAction'};
    context.setState(RNTesterNavigationReducer(null, initialAction));
    return;
  }
  const storedState = JSON.parse(storedString);
  if (launchAction) {
    context.setState(RNTesterNavigationReducer(storedState, launchAction));
    return;
  }
  context.setState(storedState);

  if (Platform.OS === 'ios') {
    Linking.addEventListener('url', (url) => {
      handleNavigation(URIActionMap(url));
    });
  }
};

export const handleNavigation = (context, action) => {
  if (Platform.OS === 'android') {
    context.drawer && context.drawer.closeDrawer(); // will need to purge this once the new design kicks in or is it ubiquitous
  }

  if (!action) {
    return false;
  }
  const newState = RNTesterNavigationReducer(context.state, action);
  if (context.state !== newState) {
    context.setState(newState, () =>
      AsyncStorage.setItem(APP_STATE_KEY, JSON.stringify(context.state)),
    );
    return true;
  }
  return false;
};
