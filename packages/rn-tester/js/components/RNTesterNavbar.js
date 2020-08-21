import React from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';

import {RNTesterThemeContext} from './RNTesterTheme';

const RNTesterNavbar = ({handleNavBarPress, screen}) => {
  const theme = React.useContext(RNTesterThemeContext);

  /** to be attached to navigation framework */
  const isAPIActive =  screen === 'apis';
  const isComponentActive =   screen === 'components';
  const isBookmarkActive =   screen === 'bookmarks';

  return (
    <View>
      {/** Bottom Navbar code */}
        {/** component and APIs tab  */}
        <View style={styles.buttonContainer}>
          {/** left tab with Components  */}
            {/** @attention attach navigation endpoints here */}
            <Pressable
              testID="components-tab"
              onPress={() =>  handleNavBarPress({ screen: 'components'})}
              style={[styles.navButton, {backgroundColor: theme.BackgroundColor}]}>
              <View style={styles.pressableContent} collapsable={false}>
                <Image
                  style={styles.componentIcon}
                  source={
                    isComponentActive
                      ? require('./../assets/bottom-nav-components-icon-active.png')
                      : require('./../assets/bottom-nav-components-icon-inactive.png')
                  }
                />
                <Text
                  style={
                    isComponentActive ? styles.activeText : styles.inactiveText
                  }>
                  Components
                </Text>
              </View>
            </Pressable>

          {/** central tab with bookmark icon  */}
          <View style={styles.centerBox}>
            <Image
              style={styles.centralBoxCutout}
              source={require('./../assets/bottom-nav-center-box.png')}
            />

          {/** floating button in center  */}
          <View style={styles.floatContainer}>
            <Pressable
              testID="bookmarks-tab"
              onPress={() =>  handleNavBarPress({ screen: 'bookmarks'})}>
                <View style={[styles.floatingButton, {backgroundColor: theme.BorderColor}]} >
                <Image
                    style={styles.bookmarkIcon}
                    source={
                    isBookmarkActive
                        ? require('../assets/bottom-nav-bookmark-fill.png')
                        : require('../assets/bottom-nav-bookmark-outline.png')
                    }
                />
                </View>
            </Pressable>
            </View>
          </View>

          {/** right tab with Components  */}
         <Pressable
          testID="apis-tab"
          onPress={() =>  handleNavBarPress({ screen: 'apis'})}
          style={[styles.navButton, {backgroundColor: theme.BackgroundColor}]}>
            <View style={styles.pressableContent} collapsable={false}>
              <Image
                style={styles.apiIcon}
                source={
                  isAPIActive
                    ? require('./../assets/bottom-nav-apis-icon-active.png')
                    : require('./../assets/bottom-nav-apis-icon-inactive.png')
                }
              />
              <Text style={isAPIActive ? styles.activeText : styles.inactiveText}>
                APIs
              </Text>
            </View>
         </Pressable>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  floatContainer: {
    flex: 1,
    zIndex: 2,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  floatingButton: {
    top: -20,
    width: 50,
    height: 50,
    borderRadius: 500,
    alignContent: 'center',
    shadowColor: 'black',
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 5,
  },
  bookmarkIcon: {
    width: 30,
    height: 30,
    margin: 10,
  },
  componentIcon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  apiIcon: {
    width: 30,
    height: 20,
    alignSelf: 'center',
  },
  activeText: {
    color: 'black',
  },
  inactiveText: {
    color: '#B1B4BA',
  },
  centralBoxCutout: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
  },
  centerBox: {
    flex: 1,
    height: 65,
  },
  navButton: {
    flex: 1,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressableContent: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = RNTesterNavbar;
