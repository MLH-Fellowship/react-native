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
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native';

import Background from './Background';

type Props = $ReadOnly<{|
  children?: React.Node,
  title: string,
  description?: ?string,
  ios?: ?boolean,
  android?: ?boolean,
|}>;

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;
import {RNTesterThemeContext} from './RNTesterTheme';

export default function ExamplePage(props: Props): React.Node {
  const description = props.description ?? '';
  const onAndroid = props.android;
  const onIos = props.ios;
  return (
    <RNTesterThemeContext.Consumer>
      {theme => {
        return (
          <>
            <View style={styles.titleView}>
              <Text style={{marginVertical: 8}}>{description}</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: 100,
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: onIos ? '#787878' : theme.SeparatorColor,
                      fontWeight: onIos ? '500' : '300',
                    }}>
                    iOS
                  </Text>
                  <Text
                    style={{
                      color: onAndroid ? '#787878' : theme.SeparatorColor,
                      fontWeight: onAndroid ? '500' : '300',
                    }}>
                    Android
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.examplesContainer}>{props.children}</View>
          </>
        );
      }}
    </RNTesterThemeContext.Consumer>
  );
}

const styles = StyleSheet.create({
  titleView: {
    backgroundColor: '#F3F8FF',
    paddingHorizontal: 25,
    paddingTop: 8,
    overflow: 'hidden',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  examplesContainer: {
    width: ScreenWidth,
    flexGrow: 1,
  },
  description: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  docsContainer: {
    alignContent: 'center',
    justifyContent: 'center',
  },
});
