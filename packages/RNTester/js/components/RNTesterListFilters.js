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
  onFilterButtonPress: function, //optional only for testing
  ...
};

class RNTesterListFilters extends React.Component<
  Props,
  {|currentFilter: string|},
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentFilter: '',
    };
  }

  filterPressed: any = filterLabel => {
    const newFilter =
      this.state.currentFilter === filterLabel ? '' : filterLabel;
    this.setState({
      currentFilter: newFilter,
    });
    this.props.onFilterButtonPress(newFilter);
  };

  render(): React.Node {
    return (
      <View style={styles.container}>
        {filters.map(filterLabel => {
          return (
            <TouchableOpacity
              key={filterLabel}
              style={[
                styles.pillStyle,
                {
                  backgroundColor:
                    this.state.currentFilter === filterLabel ? 'blue' : 'white',
                },
              ]}
              onPress={() => this.filterPressed(filterLabel)}>
              <Text
                style={{
                  color:
                    this.state.currentFilter === filterLabel ? 'white' : 'blue',
                }}>
                {filterLabel}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillStyle: {
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'blue',
  },
});

module.exports = RNTesterListFilters;
