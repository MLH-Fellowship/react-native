/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

// Shows log on the screen
const Log = ({message}) =>
  message ? (
    <View style={styles.logContainer}>
      <Text>
        <Text style={styles.bold}>Log</Text>: {message}
      </Text>
    </View>
  ) : null;

/**
 * Simple alert examples.
 */
type Props = $ReadOnly<{||}>;
exports.title = 'Alert';

class SimpleAlertExampleBlock extends React.Component<Props> {
  render() {
    return (
      <View>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => Alert.alert('Alert Title', alertMessage)}>
          <View style={styles.button}>
            <Text>Alert with message and default button</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() =>
            Alert.alert('Alert Title', alertMessage, [
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ])
          }>
          <View style={styles.button}>
            <Text>Alert with one button</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() =>
            Alert.alert('Alert Title', alertMessage, [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ])
          }>
          <View style={styles.button}>
            <Text>Alert with two buttons</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() =>
            Alert.alert('Alert Title', null, [
              {text: 'Foo', onPress: () => console.log('Foo Pressed!')},
              {text: 'Bar', onPress: () => console.log('Bar Pressed!')},
              {text: 'Baz', onPress: () => console.log('Baz Pressed!')},
            ])
          }>
          <View style={styles.button}>
            <Text>Alert with three buttons</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() =>
            Alert.alert(
              'Foo Title',
              alertMessage,
              '..............'.split('').map((dot, index) => ({
                text: 'Button ' + index,
                onPress: () => console.log('Pressed ' + index),
              })),
            )
          }>
          <View style={styles.button}>
            <Text>Alert with too many buttons</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() =>
            Alert.alert(
              'Alert Title',
              null,
              [{text: 'OK', onPress: () => console.log('OK Pressed!')}],
              {
                cancelable: false,
              },
            )
          }>
          <View style={styles.button}>
            <Text>Alert that cannot be dismissed</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() =>
            Alert.alert('', alertMessage, [
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ])
          }>
          <View style={styles.button}>
            <Text>Alert without title</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

class AlertExample extends React.Component {
  static title = 'Alert';

  static description =
    'Alerts display a concise and informative message ' +
    'and prompt the user to make a decision.';

  render() {
    return (
      <RNTesterBlock title={'Alert'}>
        <SimpleAlertExampleBlock />
      </RNTesterBlock>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
  logContainer: {
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
});

exports.title = 'Alerts';
exports.description =
  'Alerts display a concise and informative message ' +
  'and prompt the user to make a decision.';
exports.examples = [
  {
    title: 'Alert with default Button',
    description:
      "It can be used to show some information to user that doesn't require an action.",
    render(): React.Node {
      return <AlertWithDefaultButton />;
    },
  },
  {
    title: 'Alert with two Buttons',
    description: 'It can be used when an action is required from the user.',
    render(): React.Node {
      return <AlertWithTwoButtons />;
    },
  },
  {
    title: 'Alert with three Buttons',
    description: 'It can be used when there are three possible actions',
    render(): React.Node {
      return <AlertWithThreeButtons />;
    },
  },
  {
    title: 'Alert with many Buttons',
    platform: 'ios',
    description: 'It can be used when more than three actions are required.',
    render(): React.Node {
      return <AlertWithManyButtons />;
    },
  },
  {
    title: 'Alert with cancelable={true}',
    platform: 'android',
    description:
      'By passing cancelable={false} prop to alerts on Android, they can be dismissed by tapping outside of the alert box.',
    render(): React.Node {
      return <AlertWithCancelableTrue />;
    },
  },
  {
    title: 'Alert with styles',
    platform: 'ios',
    description:
      "Alert buttons can be styled. There are three button styles - 'default' | 'cancel' | 'destructive'.",
    render(): React.Node {
      return <AlertWithStyles />;
    },
  },
];
