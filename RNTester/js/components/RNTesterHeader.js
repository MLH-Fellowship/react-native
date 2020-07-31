import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {RNTesterThemeContext} from './RNTesterTheme';
import RNTesterActions from '../utils/RNTesterActions.js';

const backButtonSource = require('./../assets/header-back-button.png');

const Header = ({
  title,
  onNavigate,
  screen,
  backButton,
}: {
  title: string,
  onNavigate?: () => mixed,
  screen: string,
  backButton: boolean,
  ...
}) => (
  <RNTesterThemeContext.Consumer>
    {theme => {
      return (
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={() => {
              if(backButton)
                onNavigate(RNTesterActions.Back(screen));
            }}>
            <View>
              {backButton ? (
                <Image
                  source={backButtonSource}
                  style={styles.backButtonIcon}
                />
              ) : null}
            </View>
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        </View>
      );
    }}
  </RNTesterThemeContext.Consumer>
);

// From RNTesterApp.android.js toolbar height
const styles = StyleSheet.create({
  headerContainer: {
    height: 56,
    backgroundColor: '#F3F8FF',
    flexDirection: 'row',
  },
  backButtonContainer: {
    flex: 1,
  },
  backButtonIcon: {
    width:  20,
    height: 20,
    marginTop: 18,
    marginLeft: 10,
  },
  titleContainer: {
    flex: 8,
  },
  titleText: {
    fontSize: 30,
    marginTop: 7,
  },
});

module.exports = Header;
