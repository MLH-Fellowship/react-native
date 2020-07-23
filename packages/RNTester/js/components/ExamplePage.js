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

import * as React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';

import HeadingText from './HeadingText';
import Background from './Background';

type Props = $ReadOnly<{|
  children?: React.Node,
  title: string,
  description?: ?string,
  ios?: ?boolean,
  android?: ?boolean,
  documentationURL: ?string,
|}>;

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

export default function ExamplePage(props: Props): React.Node {
  const title = props.title ? <HeadingText text={props.title} /> : null;

  const description = props.description ?? '';
  const androidImage = props.android ? (
    <Image style={styles.platformIcon} source={imagePaths.android} />
  ) : null;

  const appleImage = props.ios ? (
    <Image style={styles.platformIcon} source={imagePaths.ios} />
  ) : null;

  const DoucumentationURL = ({url}) => (
    <View>
      <TouchableOpacity
        onPress={() => {
          if (!url) {
            return Alert.alert('Error!', 'Documentation URL is not available.');
          }
          openURLInBrowser(url);
        }}>
        <Image source={imagePaths.docs} />
      </TouchableOpacity>
    </View>
  );

  return (
    <React.Fragment>
      <View style={styles.titleView}>
        <View style={styles.titleContainer}>
          {title}
          <DoucumentationURL url={props.documentationURL} />
        </View>
        <View style={styles.iconContainer}>
          {appleImage}
          {androidImage}
        </View>
      </View>

      <Background height={ScreenHeight} width={ScreenWidth}>
        <ScrollView style={styles.scrollView}>
          <Text> {description} </Text>
          {props.children}
        </ScrollView>
      </Background>
    </React.Fragment>
  );
}

const imagePaths = {
  android: require('../assets/android-icon.png'),
  ios: require('../assets/apple-icon.png'),
  docs: require('../assets/docs-icon.png'),
};

const styles = StyleSheet.create({
  titleView: {
    maxHeight: Math.round(ScreenHeight * 0.1),
    backgroundColor: '#F3F8FF',
    padding: 20,
    overflow: 'hidden',
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: Math.round(ScreenHeight * 0.1 * 0.65),
    marginLeft: Math.round(ScreenWidth * 0.65),
  },

  scrollView: {
    width: ScreenWidth,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  platformIcon: {
    height: 35,
    width: 30,
    margin: 2,
  },
});
