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

const {
  StyleSheet,
  View,
  Text,
  Button,
  Share,
} = require('react-native');

type Props = $ReadOnly<{||}>;
type State = {|result: string|};

const shareMessage = () => {
  Share.share({
    message: blogPostOne.body
  })
    .catch(error => this.setState({result: 'error: ' + error.message}));
}

const shareText = () => {
  Share.share(
    {
      message: blogPostTwo.body,
      url: 'https://reactnative.dev/blog/2020/07/17/react-native-principles',
      title: blogPostTwo.title,
    },
    {
      subject: 'MUST READ: ' + blogPostTwo.title,
      dialogTitle: 'Share React Native Blog',
      excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter'],
      tintColor: 'blue',
    },
  )
    .catch(error => this.setState({result: 'error: ' + error.message}));
}


const blogPostOne = {
  title: 'Native Experience',
  body: `Our top priority for React Native is to match the expectations people have for each platform. This is why React Native renders to platform primitives. We value native look-and-feel over cross-platform consistency.
        For example, the TextInput in React Native renders to a UITextField on iOS. This ensures that integration with password managers and keyboard controls work out of the box. By using platform primitives, React Native apps are also able to stay up-to-date with design and behavior changes from new releases of Android and iOS.`

}

const blogPostTwo = {
  title: 'Massive Scale',
  body: `Hundreds of screens in the Facebook app are implemented with React Native. The Facebook app is used by billions of people on a huge range of devices. This is why we invest in the most challenging problems at scale.
        Deploying React Native in our apps lets us identify problems that we wouldn’t see at a smaller scale. For example, Facebook focuses on improving performance across a broad spectrum of devices from the newest iPhone to many older generations of Android devices. This focus informs our architecture projects such as Hermes, Fabric, and TurboModules.`
}

const ShareMessageWithoutTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPostOne.title}</Text>
      <Text>
        {blogPostOne.body}
      </Text>
      <Button title="SHARE" onPress={shareMessage}></Button>
    </View>
  );
};

const ShareMessageWithTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPostTwo.title}</Text>
      <Text>
        {blogPostTwo.body}
      </Text>
      <Button title="SHARE" onPress={shareText}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    margin: 10,
    textAlign: 'center',
  },
});

exports.framework = 'React';
exports.title = 'Share';
exports.description = 'Share data with other Apps.';
exports.examples = [
  {
    title: 'Share message',
    render(): React.Node {
      return <ShareMessageWithoutTitle />;
    },
  },
  {
    title: 'Share message, URL (iOS) and title (Android)',
    render(): React.Node {
      return <ShareMessageWithTitle />;
    },
  },
];
