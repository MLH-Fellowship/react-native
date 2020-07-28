/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {StyleSheet, Dimensions, Alert, Modal, View, Button} from 'react-native';
import TextContent from './textContent';

const ExampleBasicModal = ({openButtonTitle, closeButtonTitle}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Button title={openButtonTitle} onPress={() => setVisible(true)} />
      <Modal visible={visible}>
        <View style={styles.modal}>
          <TextContent />
          <Button onPress={() => setVisible(false)} title={closeButtonTitle} />
        </View>
      </Modal>
    </View>
  );
};

const ExampleStatusBarTranslucent = ({openButtonTitle, closeButtonTitle}) => {
  const [visible, setVisible] = useState(false);
  const ScreenWidth = Dimensions.get('screen').width;
  const ScreenHeight = Dimensions.get('screen').height;

  return (
    <View style={styles.example}>
      <View style={styles.openButton}>
        <Button title={openButtonTitle} onPress={() => setVisible(true)} />
      </View>
      <Modal visible={visible} statusBarTranslucent={true}>
        <View
          style={{
            ...styles.modal,
            backgroundColor: 'black',
            height: ScreenHeight,
            width: ScreenWidth,
          }}>
          <TextContent color="white" />
          <Button onPress={() => setVisible(false)} title={closeButtonTitle} />
        </View>
      </Modal>
    </View>
  );
};

const ExampleOnDismiss = ({openButtonTitle, closeButtonTitle}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.example}>
      <View style={styles.openButton}>
        <Button title={openButtonTitle} onPress={() => setVisible(true)} />
      </View>
      <Modal
        visible={visible}
        onDismiss={() => {
          Alert.alert(
            'Welcome on board',
            'Thanks for Accepting',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
        }}>
        <View style={styles.modal}>
          <TextContent />
          <Button onPress={() => setVisible(false)} title={closeButtonTitle} />
        </View>
      </Modal>
    </View>
  );
};

const ExampleOnOrientationChange = ({openButtonTitle, closeButtonTitle}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.example}>
      <View style={styles.openButton}>
        <Button title={openButtonTitle} onPress={() => setVisible(true)} />
      </View>
      <Modal
        visible={visible}
        onOrientationChange={() => {
          Alert.alert(
            'Orientation Changed',
            'See content in a different prospective',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
        }}>
        <View style={styles.modal}>
          <TextContent />
          <Button onPress={() => setVisible(false)} title={closeButtonTitle} />
        </View>
      </Modal>
    </View>
  );
};

const ExampleOnShow = ({openButtonTitle, closeButtonTitle}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.example}>
      <View style={styles.openButton}>
        <Button title={openButtonTitle} onPress={() => setVisible(true)} />
      </View>
      <Modal
        visible={visible}
        onShow={() => {
          Alert.alert(
            'Welcome User',
            "You can not move back from here. Proceed only when you're sure of it",
            [
              {
                text: 'Cancel',
                onPress: () => setVisible(false),
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
        }}>
        <View style={styles.modal}>
          <TextContent />
          <Button onPress={() => setVisible(false)} title={closeButtonTitle} />
        </View>
      </Modal>
    </View>
  );
};

const ExampleOnRequestClose = ({openButtonTitle, closeButtonTitle}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.example}>
      <View style={styles.openButton}>
        <Button title={openButtonTitle} onPress={() => setVisible(true)} />
      </View>
      <Modal
        visible={visible}
        onRequestClose={() => {
          Alert.alert(
            'Are you sure',
            'going back from this step is not recommended',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
        }}>
        <View style={styles.modal}>
          <TextContent />
          <Button onPress={() => setVisible(false)} title={closeButtonTitle} />
        </View>
      </Modal>
    </View>
  );
};

const ExamplePresentationStyle = ({openButtonTitle, closeButtonTitle}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.example}>
      <View style={styles.openButton}>
        <Button title={openButtonTitle} onPress={() => setVisible(true)} />
      </View>
      <Modal visible={visible} presentationStyle="formSheet">
        <View style={styles.modal}>
          <TextContent />
          <Button onPress={() => setVisible(false)} title={closeButtonTitle} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    padding: 20,
    backgroundColor: 'white',
  },
});

exports.displayName = (undefined: ?string);
exports.framework = 'React';
exports.title = '<Modal>';
exports.description = 'Component for presenting modal views.';
exports.documentationURL = 'https://reactnative.dev/docs/modal';

exports.examples = [
  {
    title: 'Basic Modal',
    description:
      'Simple Read More Dialog. A simple modal can be generated using the default configurations, triggered by a button press, The visibility of the modal is controlled using the visible={true/false} prop',
    render: (): React.Node => (
      <ExampleBasicModal
        openButtonTitle="READ MORE"
        closeButtonTitle="PROCEED"
      />
    ),
  },
  {
    title: 'Status Bar Behavior with Modal',
    platform: 'android',
    description:
      'Read important Content Covering all screen. Modals can be configured to be rendered above or below the status bar using the statusBarTranslucent prop. Making statusBarTranslucent={true} renders the status bar as translucent, and the underlying modal content is shown.',
    render: (): React.Node => (
      <ExampleStatusBarTranslucent
        openButtonTitle="Open in Full Screen View"
        closeButtonTitle="Proceed"
      />
    ),
  },
  {
    title: 'Binding Events to Dismiss Action',
    platform: 'ios',
    description:
      'Modals can be configured to run functions when the modal has been dismissed using the onDismiss prop.',
    render: (): React.Node => (
      <ExampleOnDismiss
        openButtonTitle="Read Terms and Conditions"
        closeButtonTitle="Proceed"
      />
    ),
  },
  {
    title: 'Binding Events to Orientation Change',
    platform: 'ios',
    description:
      'Modals can listen for change in orientation actions and trigger functions upon the same. The following modal shows an alert when orientation is changed. This is done using the onOrientationChange prop, which accepts a function as value.',
    render: (): React.Node => (
      <ExampleOnOrientationChange
        openButtonTitle="Open Modal"
        closeButtonTitle="Proceed"
      />
    ),
  },
  {
    title: 'Actions on physical back button',
    platform: 'android',
    description:
      'Modal can watch for physical back button presses in Android, and trigger functions on the event. The following modal uses the dismissAction prop which accepts a function as value to launch an alert when back button is pressed',
    render: (): React.Node => (
      <ExampleOnRequestClose
        openButtonTitle="Listen for Close Action"
        closeButtonTitle="Proceed"
      />
    ),
  },
  {
    title: 'Modal OnShow Actions',
    description:
      'You can even attach functions to modal show events. They are triggered as soon as the modal is opened. This is done using the onShow prop.',
    render: (): React.Node => (
      <ExampleOnShow openButtonTitle="Open Modal" closeButtonTitle="Proceed" />
    ),
  },
  {
    title: 'Varying presentation style',
    platform: 'ios',
    description:
      'The presentationStyle prop controls how the modal appears (generally on larger devices such as iPad or plus-sized iPhones).',
    render: (): React.Node => (
      <ExamplePresentationStyle
        openButtonTitle="Open modal as formSheet"
        closeButtonTitle="Proceed"
      />
    ),
  },
];
