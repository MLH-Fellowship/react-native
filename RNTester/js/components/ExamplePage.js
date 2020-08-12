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

export default function ExamplePage(props: Props): React.Node {
  const description = props.description ?? '';
  const androidPresent = !props.android;
  const applePresent = !props.ios;

  return (
    <React.Fragment>
      <View style={styles.titleView}>
        <>
          <Text style={{marginVertical: 8}}>{description}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                flexDirection: 'row',
                width: 150,
                justifyContent: 'space-between',
              }}>
              <Text style={styles.platformPill}>iOS</Text>
              <Text style={styles.platformPill}>Android</Text>
            </View>
            <Text style={{textDecorationLine: 'underline'}}>Docs</Text>
          </View>
        </>
      </View>
      <View style={styles.examplesContainer}>{props.children}</View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  titleView: {
    backgroundColor: '#F3F8FF',
    paddingHorizontal: 25,
    paddingTop: 8,
    overflow: 'hidden',
  },
  platformPill: {
    width: 70,
    padding: 2,
    borderColor: '#52A5FF',
    borderWidth: 1,
    borderRadius: 12,
    textAlign: 'center',
    marginBottom: 8,
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
