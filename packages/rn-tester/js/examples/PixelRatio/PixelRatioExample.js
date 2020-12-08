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

import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  PixelRatio,
  View,
} from 'react-native';

import type {Node, Element} from 'react';

function LayoutSizeToPixel() {
  const [layoutDPSize, setLayoutDPSize] = useState(null);
  const pixelSize = PixelRatio.getPixelSizeForLayoutSize(
    layoutDPSize ? layoutDPSize : 0,
  );

  const handleDPInputChange = changedText => {
    const layoutSize = parseInt(changedText);
    setLayoutDPSize(layoutSize);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.inputLabel}>Layout Size(dp): </Text>
          <TextInput
            style={styles.input}
            value={layoutDPSize ? layoutDPSize.toString() : ''}
            keyboardType={'numeric'}
            onChangeText={handleDPInputChange}
          />
        </View>
        <View style={[styles.row, styles.outputContainer]}>
          <Text style={styles.inputLabel}>Pixel Size: </Text>
          <Text style={styles.output}>{pixelSize}px</Text>
        </View>
      </View>
    </View>
  );
}

function RoundToNearestPixel() {
  const [layoutDPSizeText, setLayoutDPSizeText] = useState('');
  const layoutDPSize = parseFloat(layoutDPSizeText);

  const pixelSize = PixelRatio.roundToNearestPixel(
    layoutDPSize ? layoutDPSize : 0,
  );

  const handleDPInputChange = changedText => {
    setLayoutDPSizeText(changedText);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.inputLabel}>Layout Size(dp): </Text>
          <TextInput
            style={styles.input}
            value={layoutDPSizeText ? layoutDPSizeText.toString() : ''}
            keyboardType={'numeric'}
            onChangeText={handleDPInputChange}
          />
        </View>
        <View style={[styles.row, styles.outputContainer]}>
          <Text style={styles.inputLabel}>Nearest Layout Size: </Text>
          <Text style={styles.output}>{pixelSize}dp</Text>
        </View>
      </View>
    </View>
  );
}

function GetPixelRatio() {
  const [pixelDensity, setPixelDensity] = useState(null);

  const getPixelDensityCallback = () => {
    setPixelDensity(PixelRatio.get());
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Button onPress={getPixelDensityCallback} title={'Get Pixel Density'} />
        {pixelDensity ? (
          <View style={[styles.row, styles.outputContainer]}>
            <Text style={styles.inputLabel}>Pixel Density: </Text>
            <Text style={styles.output}>{pixelDensity}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

function GetFontScale() {
  const [fontScale, setFontScale] = useState(null);

  const getPixelDensityCallback = () => {
    setFontScale(PixelRatio.getFontScale());
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Button onPress={getPixelDensityCallback} title={'Get Font Scale'} />
        {fontScale ? (
          <View style={[styles.row, styles.outputContainer]}>
            <Text style={styles.inputLabel}>Font scale: </Text>
            <Text style={styles.output}>{fontScale}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 40,
    flex: 1,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outputContainer: {
    marginTop: 16,
  },
  inputLabel: {
    fontWeight: 'bold',
  },
  input: {
    borderRadius: 6,
    borderWidth: 1,
    paddingVertical: 0,
    height: 30,
    width: 200,
    alignSelf: 'center',
    marginLeft: 14,
    paddingHorizontal: 8,
  },
  card: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
  },
});

exports.title = 'PixelRatio';
exports.category = 'UI';
exports.documentationURL = 'https://reactnative.dev/docs/pixelratio';
exports.description = "Gives access to device's pixel density and font scale";
exports.examples = [
  {
    title: 'Get pixel density',
    description: 'Get pixel density of the device.',
    render(): Element<any> {
      return <GetPixelRatio />;
    },
  },
  {
    title: 'Get font scale',
    description: 'Get  the scaling factor for font sizes.',
    render(): Element<any> {
      return <GetFontScale />;
    },
  },
  {
    title: 'Get pixel size from layout size',
    description: 'layout size (dp) -> pixel size (px)',
    render(): Element<any> {
      return <LayoutSizeToPixel />;
    },
  },
  {
    title: 'Rounds a layout size to the nearest pixel',
    description:
      'Rounds a layout size (dp) to the nearest layout size that corresponds to an integer number of pixels',
    render(): Element<any> {
      return <RoundToNearestPixel />;
    },
  },
];
