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

const React = require('react');

const {DeviceEventEmitter, Text, View} = require('react-native');

import type EmitterSubscription from '../../../../Libraries/vendor/emitter/EmitterSubscription';

class OrientationChangeExample extends React.Component<{...}, $FlowFixMeState> {
  _orientationSubscription: EmitterSubscription;

  state = {
    currentOrientation: 'potrait-primary',
    orientationDegrees: 0,
    isLandscape: false,
  };

  componentDidMount() {
    this._orientationSubscription = DeviceEventEmitter.addListener(
      'namedOrientationDidChange',
      this._onOrientationChange,
    );
  }

  componentWillUnmount() {
    this._orientationSubscription.remove();
  }

  _onOrientationChange = (orientation: Object) => {
    this.setState({
      currentOrientation: orientation.name,
      orientationDegrees: orientation.rotationDegrees,
      isLandscape: orientation.isLandscape,
    });
  };

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={{textAlign: 'center', width: '80%', marginVertical: 20}}>
          Hello there, React Native user! Your device is currently on{' '}
          {this.state.currentOrientation.endsWith('primary')
            ? 'primary'
            : 'secondary'}{' '}
          {this.state.isLandscape ? 'landscape' : 'potrait'} mode. This is at an
          angle of {this.state.orientationDegrees} from its default position.
        </Text>
      </View>
    );
  }
}

exports.title = 'OrientationChangeExample';
exports.description = 'listening to orientation changes';
exports.examples = [
  {
    title: 'OrientationChangeExample',
    description: 'listening to device orientation changes',
    render(): React.Node {
      return <OrientationChangeExample />;
    },
  },
];
