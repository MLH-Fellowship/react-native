/**
 * Experimental code to demonstrate custom bottom bar
 */
import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

/**
 * here are seeding scripts to mock data in script.
 */
import {ScrollView} from 'react-native';
const data = [];
for (let i = 0; i < 100; i += 1) {
  data.push({});
}
const APP_COLOR = '#F3F8FF';
/** mock testing code ends */

/**
 * Main Component which renders the bottom tab-bar view.
 */
const Component = () => {
  /** to be attached to navigation framework */
  const [apiActive, setApiActive] = useState(false);
  const [componentActive, setComponentActive] = useState(true);
  return (
    <View>
      {/** mocking data to demonstrate transparency : starts  */}
      <ScrollView>
        {data.map(() => {
          return (
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ultrices metus in leo molestie, eget eleifend arcu vehicula. Donec
              scelerisque magna eu laoreet sagittis. Integer facilisis neque
              tortor, ultrices feugiat tellus maximus id. In hac habitasse
              platea dictumst. Nulla facilisi. Pellentesque ultrices tortor leo,
              a elementum enim ornare eu. Mauris venenatis turpis ut dictum
              scelerisque. Nullam finibus ullamcorper mi vitae efficitur. Sed
              volutpat egestas orci a tincidunt. Etiam id fermentum sapien, id
              sagittis justo.
            </Text>
          );
        })}
      </ScrollView>
      {/** mocking data to demonstrate transparency : ends  */}

      {/** Bottom Navbar code */}
      <View style={styles.bottomNavbar}>
        {/** floating button in center  */}
        <View style={styles.floatContainer}>
          <View style={styles.floatingButton}>
            <TouchableOpacity
              onPress={() => console.log('Bookmark Button Pressed')}>
              <Image
                style={styles.bookmarkIcon}
                source={require('./assets/bottom-nav-bookmark-outline.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/** component and APIs tab  */}
        <View style={styles.buttonContainer}>
          {/** left tab with Components  */}
          <View style={styles.leftBox}>
            <TouchableOpacity
              onPress={() => {
                if (componentActive) {
                  return;
                } else {
                  setComponentActive(true);
                  setApiActive(false);
                }
              }}>
              <Image
                style={styles.componentIcon}
                source={
                  componentActive
                    ? require('./assets/bottom-nav-components-icon-active.png')
                    : require('./assets/bottom-nav-components-icon-inactive.png')
                }
              />
              <Text
                style={
                  componentActive ? styles.activeText : styles.inactiveText
                }>
                Components
              </Text>
            </TouchableOpacity>
          </View>

          {/** central tab with frame  */}
          <View style={styles.centerBox}>
            <Image
              style={styles.centralBoxCutout}
              source={require('./assets/bottom-nav-center-box.png')}
            />
          </View>

          {/** right tab with Components  */}
          <View style={styles.rightBox}>
            <TouchableOpacity
              onPress={() => {
                if (apiActive) {
                  return;
                } else {
                  setComponentActive(false);
                  setApiActive(true);
                }
              }}>
              <Image
                style={styles.apiIcon}
                source={
                  apiActive
                    ? require('./assets/bottom-nav-apis-icon-active.png')
                    : require('./assets/bottom-nav-apis-icon-inactive.png')
                }
              />
              <Text style={apiActive ? styles.activeText : styles.inactiveText}>
                APIs
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

/**
 * I won't explain these.
 */
const styles = StyleSheet.create({
  bottomNavbar: {
    bottom: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
  },
  floatContainer: {
    flex: 1,
    zIndex: 1,
    bottom: -36,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  floatingButton: {
    width: 50,
    height: 50,
    borderRadius: 500,
    alignContent: 'center',
    backgroundColor: '#005DFF',
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
  leftBox: {
    flex: 1,
    height: 65,
    backgroundColor: APP_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerBox: {
    flex: 1,
    height: 65,
  },
  rightBox: {
    flex: 1,
    height: 65,
    backgroundColor: APP_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Component;
