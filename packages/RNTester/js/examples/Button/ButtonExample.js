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

const React = require('react');

const {Alert, Button, View, StyleSheet, Image} = require('react-native');
import {RNTesterThemeContext} from '../../components/RNTesterTheme';

function onButtonPress(buttonName) {
  Alert.alert(`Your application has been ${buttonName}`);
}

exports.displayName = 'ButtonExample';
exports.framework = 'React';
exports.title = '<Button>';
exports.description = 'Simple React Native button component.';

exports.examples = [
  {
    title: 'Button with default styling',
    description: ('Note: Button with default styling with title="Submit Application"' +
      'and onPress handler to be called when user taps on button': string),
    render: function (): React.Node {
      return (
        <RNTesterThemeContext.Consumer>
          {(theme) => {
            return (
              <Button
                onPress={() => onButtonPress('submitted')}
                testID="button_default_styling"
                title="Submit Application"
                accessibilityLabel="Press to submit your application!"
              />
            );
          }}
        </RNTesterThemeContext.Consumer>
      );
    },
  },
  {
    title: 'Button with color="red"',
    description: ('Note: On iOS, the color prop controls the color of the text. On ' +
      'Android, the color adjusts the background color of the button.': string),
    render: function (): React.Node {
      return (
        <RNTesterThemeContext.Consumer>
          {(theme) => {
            return (
              <Button
                onPress={() => onButtonPress('submitted')}
                testID="cancel_button"
                color="red"
                title="Cancel Application"
                accessibilityLabel="Press to cancel your application!"
              />
            );
          }}
        </RNTesterThemeContext.Consumer>
      );
    },
  },
  {
    title: 'Two Buttons with Flexbox layout',
    description: ('Note: Two buttons wrapped inside View with justifyContent: spaceBetween,' +
      'This layout strategy lets the title define the width of the button': string),
    render: function (): React.Node {
      return (
        <RNTesterThemeContext.Consumer>
          {(theme) => {
            return (
              <View style={styles.container}>
                <Button
                  onPress={() => onButtonPress('cancelled')}
                  testID="two_cancel_button"
                  color="red"
                  title="Cancel"
                  accessibilityLabel="Press to cancel your application!"
                />
                <Button
                  onPress={() => onButtonPress('submitted')}
                  testID="two_submit_button"
                  color="green"
                  title="Submit"
                  accessibilityLabel="Press to submit your application!"
                />
              </View>
            );
          }}
        </RNTesterThemeContext.Consumer>
      );
    },
  },
  {
    title: 'Three Buttons with Flexbox layout',
    description: ('Note: Three buttons wrapped inside View with justifyContent: spaceBetween,' +
      'This layout strategy lets the title define the width of the button': string),
    render: function (): React.Node {
      return (
        <RNTesterThemeContext.Consumer>
          {(theme) => {
            return (
              <View style={styles.container}>
                <Button
                  onPress={() => onButtonPress('cancelled')}
                  testID="three_cancel_button"
                  color="red"
                  title="Cancel"
                  accessibilityLabel="Press to cancel your application!"
                />
                <Button
                  onPress={() => onButtonPress('saved')}
                  testID="three_save_button"
                  title="Save For Later"
                  accessibilityLabel="Press to save your application!"
                />
                <Button
                  onPress={() => onButtonPress('submitted')}
                  testID="three_submit_button"
                  color="green"
                  title="Submit"
                  accessibilityLabel="Press to submit your application!"
                />
              </View>
            );
          }}
        </RNTesterThemeContext.Consumer>
      );
    },
  },
  {
    title: 'Button with disabled={true}',
    description:
      'By passing disabled={true} all interactions for the button are disabled.',
    render: function (): React.Node {
      return (
        <Button
          disabled
          onPress={() => onButtonPress('submitted')}
          testID="disabled_button"
          title="Submit Application"
          accessibilityLabel="Press to submit your application!"
        />
      );
    },
  },
  {
    title: 'Button with accessibilityLabel="label',
    description:
      'Note: this prop changes the text that a screen ' +
      'reader announces (there are no visual differences).',
    render: function (): React.Node {
      return (
        <Button
          onPress={() => onButtonPress('submitted')}
          testID="accessibilityLabel_button"
          title="Submit Application"
          accessibilityLabel="Press to submit your application!"
        />
      );
    },
  },
  {
    title: 'Button with no onPress',
    description:
      'Note: This button does not interact on touch. To fix, always remember to pass onPress handler to the button.',
    render: function (): React.Node {
      return (
        <Button
          testID="onPress_button"
          title="Submit Application"
          accessibilityLabel="See an informative alert"
        />
      );
    },
  },
];

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
