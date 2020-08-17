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
  ScrollView,
  StyleSheet,
  RefreshControl,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Platform,
} = require('react-native');

const {
  PlainInput,
  renderSmallSwitchOption,
} = require('../../components/ListExampleShared');

const styles = StyleSheet.create({
  row: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#3a5795',
    margin: 5,
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
  },
  scrollview: {
    flex: 1,
  },
  container: {
    backgroundColor: 'rgb(239, 239, 244)',
    flex: 1,
  },
  list: {
    backgroundColor: 'white',
    flexGrow: 1,
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  searchRow: {
    paddingHorizontal: 10,
  },
});

class Row extends React.Component {
  _onClick = () => {
    this.props.onClick(this.props.data);
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this._onClick}>
        <View style={styles.row}>
          <Text style={styles.text}>
            {this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

class RefreshControlExample extends React.Component {
  state = {
    isRefreshing: false,
    loaded: 0,
    rowData: Array.from(new Array(20)).map((val, i) => ({
      text: 'Initial row ' + i,
      clicks: 0,
    })),
    tintColor: '',
    titleColor: '',
    title: '',
    progressBgColor: '',
    progressViewOffset: null,
    enabled: true,
  };

  _onClick = row => {
    row.clicks++;
    this.setState({
      rowData: this.state.rowData,
    });
  };

  _onChangeTintColor = tintColor => {
    this.setState({tintColor});
  };

  _onChangeTitleColor = titleColor => {
    this.setState({titleColor});
  };

  _onChangeProgressBgColor = progressBgColor => {
    this.setState({progressBgColor});
  };

  _onChangeProgressViewOffset = progessViewOffset => {
    this.setState({progessViewOffset});
  };

  _onChangeTitle = title => {
    this.setState({title});
  };

  render() {
    const rows = this.state.rowData.map((row, ii) => {
      return <Row key={ii} data={row} onClick={this._onClick} />;
    });
    return (
      <View style={styles.container}>
        <View style={styles.searchRow}>
          {renderSmallSwitchOption(this, 'isRefreshing')}
          {Platform.OS === 'android' && (
            <View style={styles.options}>
              {renderSmallSwitchOption(this, 'enabled')}
              <PlainInput
                onChangeText={this._onChangeProgressViewOffset}
                placeholder="Progress View Offset"
                value={this.state.progressViewOffset}
              />
              <PlainInput
                onChangeText={this._onChangeProgressBgColor}
                placeholder="Progress Background Color"
                value={this.state.progressBgColor}
              />
            </View>
          )}

          {Platform.OS !== 'android' && (
            <View style={styles.options}>
              <PlainInput
                onChangeText={this._onChangeTintColor}
                placeholder="Tint Color"
                value={this.state.tintColor}
              />
              <PlainInput
                onChangeText={this._onChangeTitleColor}
                placeholder="Title Color"
                value={this.state.titleColor}
              />
              <PlainInput
                onChangeText={this._onChangeTitle}
                placeholder="Title"
                value={this.state.title}
              />
            </View>
          )}
        </View>
        <ScrollView
          style={styles.scrollview}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh}
              enabled={this.state.enabled || true}
              tintColor={this.state.tintColor || '#ff0000'}
              title={this.state.title || 'Loading...'}
              titleColor={this.state.titleColor || '#00ff00'}
              colors={['#ff0000', '#00ff00', '#0000ff']}
              progressViewOffset={this.state.progressViewOffset || null}
              progressBackgroundColor={this.state.progressBgColor || '#ffff00'}
            />
          }>
          {rows}
        </ScrollView>
      </View>
    );
  }

  _onRefresh = () => {
    this.setState({isRefreshing: true});
    setTimeout(() => {
      // prepend 10 items
      const rowData = Array.from(new Array(10))
        .map((val, i) => ({
          text: 'Loaded row ' + (+this.state.loaded + i),
          clicks: 0,
        }))
        .concat(this.state.rowData);

      this.setState({
        loaded: this.state.loaded + 10,
        isRefreshing: false,
        rowData: rowData,
      });
    }, 5000);
  };
}

exports.title = 'RefreshControl';
exports.description = 'Adds pull-to-refresh support to a scrollview.';
exports.simpleExampleContainer = true;
exports.examples = [
  {
    title: 'Simple refresh',
    render: function(): React.Element<typeof RefreshControlExample> {
      return <RefreshControlExample />;
    },
  },
];
