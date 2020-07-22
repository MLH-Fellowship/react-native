/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

// type Props = $ReadOnly<{|
//   children?: React.Node,
//   title?: ?string,
//   description?: ?string,
//   isDisabled: ?boolean,
// |}>;

import React, {useState} from 'react';
import {RNTesterThemeContext} from './RNTesterTheme';
import {StyleSheet, Text, View} from 'react-native';

/** functional component for generating example blocks */
const RNTesterBlock = ({description, isDisabled, title, children}) => {
  let descComponent = null;

  /** generating description component if description passed */
  if (description) {
    descComponent = (
      <RNTesterThemeContext.Consumer>
        {theme => {
          return (
            <Text style={[styles.descriptionText, {color: theme.LabelColor}]}>
              {description}
            </Text>
          );
        }}
      </RNTesterThemeContext.Consumer>
    );
  }

  /** render the example card */
  return (
    <RNTesterThemeContext.Consumer>
      {theme => {
        return (
          <View
            style={[
              styles.container,
              {
                borderColor: theme.SeparatorColor,
                backgroundColor: theme.SystemBackgroundColor,
              },
            ]}>
            {/* Show an overlay on top of the container if example is not available on the current platform */}
            {isDisabled && <View style={styles.disabledOverlay} />}
            <View
              style={[
                styles.titleContainer,
                {
                  borderBottomColor: theme.SeparatorColor,
                  backgroundColor: theme.QuaternarySystemFillColor,
                },
              ]}>
              <Text style={[styles.titleText, {color: theme.LabelColor}]}>
                {title}
              </Text>
              {descComponent}
            </View>
            <View style={styles.children}>{children}</View>
          </View>
        );
      }}
    </RNTesterThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
    borderWidth: 1,
    borderColor: 'blue',
    margin: 10,
    marginVertical: 5,
    overflow: 'hidden',
    position: 'relative',
  },
  titleContainer: {
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  titleText: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    fontWeight: '300',
  },
  descriptionText: {
    fontSize: 12,
  },
  children: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#F3F8FF',
    margin: 10,
  },
  disabledOverlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#D3D3D3',
    opacity: 0.5,
    top: 0,
    left: 0,
    zIndex: 1,
  },
});

module.exports = RNTesterBlock;
