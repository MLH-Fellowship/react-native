/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

'use strict';

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Vibration,
  Platform,
} from 'react-native';

exports.framework = 'React';
exports.title = 'Vibration';
exports.description =
  'Vibration API that exposes methods to make device vibrate.';

/** show platform specific parameter usage */
let pattern, patternLiteral, patternDescription;

if (Platform.OS === 'android') {
  pattern = [0, 500, 200, 500];
  patternLiteral = '[0, 500, 200, 500]';
  patternDescription = `Vibration length on Android can be set as needed.

For Example, the arguments : 
${patternLiteral} behave following these rules.

argument at 0: duration to wait before turning the vibrator on.
argument at odd index: vibration length.
argument at even index: duration to wait before next vibration.
`;
} else {
  pattern = [0, 1000, 2000, 3000];
  patternLiteral = '[0, 1000, 2000, 3000]';
  patternDescription = `Unlike Android, vibration length on iOS is fixed.

For example, the pattern in arguments : ${patternLiteral} control only the durations BETWEEN each vibration.

argument at 0: duration to wait before turning the vibrator on.
rest arguments: duration to wait before next vibration.
`;
}

/** example use-cases */
const PlatformDescription = () => (
  <View style={styles.wrapper}>
    <Text>{patternDescription}</Text>
  </View>
);

const SingleVibrateExample = () => (
  <TouchableHighlight
    style={styles.wrapper}
    onPress={() => Vibration.vibrate(1000)}>
    <View style={styles.button}>
      <Text>Vibrate</Text>
    </View>
  </TouchableHighlight>
);

const PatternVibrateExample = () => (
  <TouchableHighlight
    style={styles.wrapper}
    onPress={() => Vibration.vibrate(pattern)}>
    <View style={styles.button}>
      <Text>Vibrate following pattern</Text>
    </View>
  </TouchableHighlight>
);

const InfiniteVibrateExample = () => (
  <TouchableHighlight
    style={styles.wrapper}
    onPress={() => Vibration.vibrate(pattern, true)}>
    <View style={styles.button}>
      <Text>Vibrate until cancel</Text>
    </View>
  </TouchableHighlight>
);

const StopVibrationExample = () => (
  <TouchableHighlight style={styles.wrapper} onPress={() => Vibration.cancel()}>
    <View style={styles.button}>
      <Text>Stop Vibration</Text>
    </View>
  </TouchableHighlight>
);

exports.examples = [
  {
    title: 'API Description',
    description:
      'The vibration API behaves differently for different platforms, the use-case for your current platform is given here',
    render: (): React.Node => <PlatformDescription />,
  },
  {
    title: 'Simple Device Vibration',
    description:
      'The vibrate method without any argument triggers a single vibration cycle.',
    render: (): React.Node => <SingleVibrateExample />,
  },

  {
    title: 'Vibration based on timed pattern',
    description: `The vibrate method can be used to trigger the vibration as per the passed pattern. Here, the api call processes the pattern : ${patternLiteral}.`,
    render: (): React.Node => <PatternVibrateExample />,
  },
  {
    title: 'Infinite vibration until manually stopped',
    description:
      'Vibration.vibrate provides an api to trigger the device vibrator, and accepts two parameters. Setting the second(option) repeat parameter to true makes the device vibrate untill manually cancelled.',
    render: (): React.Node => <InfiniteVibrateExample />,
  },
  {
    title: 'Stop device vibration',
    description:
      'Once a vibration call has been made with the repeat enabled, the vibration would continue until Vibration.cancel() is called.',
    render: (): React.Node => <StopVibrationExample />,
  },
];

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
});
