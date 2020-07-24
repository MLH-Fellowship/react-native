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

type Props = $ReadOnly<{|
  children?: React.Node,
  title?: ?string,
  description?: ?string,
  isDisabled: ?boolean,
|}>;

import React, {useState} from 'react';
import {RNTesterThemeContext} from './RNTesterTheme';
import {StyleSheet, Text, View} from 'react-native';

/** functional component for generating example blocks */
const RNTesterBlock = ({description, isDisabled, title, children}: Props) => {
  let descComponent = null;
  isDisabled = [false, true, false, false, false, false, true, false, true][
    Math.floor(Math.random() * 6 + 1)
  ];
  /** generating description component if description passed */
  if (description) {
    descComponent = (
      <RNTesterThemeContext.Consumer>
        {theme => {
          return <Text style={[styles.descriptionText]}>{description}</Text>;
        }}
      </RNTesterThemeContext.Consumer>
    );
  }

  return (
    <RNTesterThemeContext.Consumer>
      {theme => (
        <View
          style={[isDisabled ? styles.disabledContainer : styles.container]}>
          {/* Show an overlay on top of the container if example is not available on the current platform */}
          {isDisabled && <View style={styles.disabledOverlay} />}

          <View style={[styles.titleContainer]}>
            <Text style={[styles.titleText]}>{title}</Text>
            {descComponent}
          </View>
          <View style={styles.children}>{children}</View>
        </View>
      )}
    </RNTesterThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
    borderWidth: 1,
    margin: 15,
    marginVertical: 5,
    borderColor: '#005DFF',
    backgroundColor: 'white',
  },
  disabledContainer: {
    borderRadius: 0,
    margin: 15,
    marginVertical: 5,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'Times New Roman',
    fontWeight: '300',
  },
  titleContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  descriptionText: {
    fontSize: 12,
    opacity: 1,
    color: '#a4a4a4',
  },
  children: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#F3F8FF',
    margin: 10,
  },
  disabledOverlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#F3F8FF',
    opacity: 0.4,
    zIndex: 1,
  },
});

module.exports = RNTesterBlock;
