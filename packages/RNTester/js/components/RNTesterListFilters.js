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

const {StyleSheet, Text, TouchableOpacity, View} = require('react-native');
const filters = ['Basic', 'UI', 'ListViews', 'iOS', 'Android'];

const filterToFieldMapping = filters.reduce((acc, filter) => {
  acc[filter] = filter.toLowerCase() + 'Selected';
  return acc;
}, {});

type State = {|
  basicSelected: boolean,
  uiSelected: boolean,
  listViewsSelected: boolean,
  iosSelected: boolean,
  androidSelected: boolean,
|};

type Props = {
  onFilterButtonPress?: function, //optional only for testing
  ...
};

class RNTesterListFilters extends React.Component<State, Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      basicSelected: false,
      uiSelected: false,
      listViewsSelected: false,
      iosSelected: false,
      androidSelected: false,
    };
  }

  filterPressed = filterLabel => {
    this.state.setState({
      [filterToFieldMapping[filterLabel]]: !this.state[
        filterToFieldMapping[filterLabel]
      ],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View />
        {filters.map(filterLabel => {
          <TouchableOpacity
            style={styles.pillStyle}
            onPress={() => filterPressed(filterLabel)}>
            <Text style={{color: 'white'}}>{filterLabel}</Text>
          </TouchableOpacity>;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  pillStyle: {
    backgroundColor: 'blue',
    padding: 5,
    marginHorizontal: 5,
    borderRadius: 8,
  },
});

module.exports = RNTesterListFilters;
