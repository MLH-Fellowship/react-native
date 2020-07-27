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

import React from 'react';
import {StyleSheet, View} from 'react-native';
// import RNTesterApp from './js/RNTesterApp';
import RNTesterApp from './js/RNTesterTabBarMock';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <RNTesterApp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
