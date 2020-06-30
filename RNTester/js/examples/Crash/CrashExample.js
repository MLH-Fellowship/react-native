/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

'use strict';

import type {Node} from 'React';
import type {ExtendedError} from 'react-native/Libraries/Core/Devtools/parseErrorStack';
import type {PressEvent} from '../../../../Libraries/Types/CoreEventTypes';
import {
  Alert,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Platform,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import ErrorBoundary from './ErrorBoundary';
import NativeLogModule from './NativeLogModule';

const showNotImplmentedAlert = ({exampleName}) => {
  Alert.alert(
    'Not Implemented!',
    `${exampleName} has not been implemented on ${Platform.OS}.`,
  );
};

const SECTIONS = [
  {
    title: 'Logging',
    examples: [
      {
        title: 'Native Log Warning',
        onPressHandler: () => {
          NativeLogModule.showWarning();
        },
      },
      {
        title: 'Native Log Error',
        onPressHandler: () => {
          NativeLogModule.showError();
        },
      },
      {
        title: 'Native Log Fatal',
        onPressHandler: () => {
          //TODO:
          // Implement it on iOS and show alert only on android
          showNotImplmentedAlert({exampleName: 'Native Log Fatal'});
        },
      },
      {
        title: 'Console Warning',
        onPressHandler: () => {
          console.warn('Warning!!');
        },
      },
      {
        title: 'Console Error',
        onPressHandler: () => {
          console.error('Error!!');
        },
      },
      {
        title: 'React Warning',
        customRender: () => <ReactWarningExample key="react-warning-example" />,
      },
    ],
  },
  {
    title: 'Syntax Errors',
    examples: [
      {
        title: 'LogBox Syntax Error',
        onPressHandler: () => {
          const message = `TransformError SyntaxError: /path/to/RKJSModules/Apps/CrashReact/CrashReactApp.js: '${'im' +
            'port'} and 'export' may only appear at the top level (199:0)
      
        197 | });
        198 |
      > 199 | export default CrashReactApp;
            | ^
        200 |`;
          const syntaxError: ExtendedError = new Error(message);
          syntaxError.preventSymbolication = true;
          throw syntaxError;
        },
      },
      {
        title: 'Native Syntax Error',
        onPressHandler: () => {
          // TODO: Implement it on both android and iOS
          const message = "Exception in native call\n" +
                                  "    com.facebook.react.common.DebugServerException: Error while reading multipart response.\n" +
                                  "    \n" +
                                  "    Response code: 200\n" +
                                  "    \n" +
                                  "    URL: http://10.0.2.2:8081/RNTester/js/RNTesterApp.android.bundle?platform=android&dev=true&minify=false&app=com.facebook.react.uiapp&modulesOnly=false&runModule=true\n" +
                                  "    \n" +
                                  "    \n" +
                                  "        at com.facebook.react.devsupport.BundleDownloader.processMultipartResponse(BundleDownloader.java:234)\n" +
                                  "        at com.facebook.react.devsupport.BundleDownloader.access$100(BundleDownloader.java:34)\n" +
                                  "        at com.facebook.react.devsupport.BundleDownloader$1.onResponse(BundleDownloader.java:147)\n" +
                                  "        at okhttp3.RealCall$AsyncCall.execute(RealCall.java:174)\n" +
                                  "        at okhttp3.internal.NamedRunnable.run(NamedRunnable.java:32)\n" +
                                  "        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1167)\n" +
                                  "        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:641)\n" +
                                  "        at java.lang.Thread.run(Thread.java:764)";
          NativeLogModule.showSyntaxError(message);
          //RedBoxDialog is not a public class, can't wrap in a module too..
          //Maybe create a new child class to access RedBox
//          showNotImplmentedAlert({exampleName: 'Native Syntax Error'});

        },
      },
    ],
  },
  {
    title: 'JavaScript Errors',
    examples: [
      {
        title: 'Unhandled JavaScript Error',
        onPressHandler: () => {
          throw new Error('Unhandled JavaScript Error');
        },
      },

      {
        title: 'Throw JS Errror In Render',
        customRender: () => (
          <ReactErrorBoundaryExample key="react-error-boundary-example" />
        ),
      },
    ],
  },
  {
    title: 'Native Crashes',
    examples: [
      //Todo: Add various examples
      {
        title: 'Example 1',
        onPressHandler: () => {
          // TODO: Implement native crashes
//          showNotImplmentedAlert({exampleName: 'Native Crashes'});
            NativeLogModule.crashScreen();
        },
      },
     {
            title: 'Example 2',
            onPressHandler: () => {
              // TODO: Implement native crashes
    //          showNotImplmentedAlert({exampleName: 'Native Crashes'});
                NativeLogModule.crashScreen("alert");
            },
       },
    ],
  },
];

const ReactWarningExample = () => {
  const [showFruitList, setShowFruitList] = useState(false);

  const FruitListWithMissingKeys = () => (
    <View style={{display: 'none'}}>
      {['Apple', 'Banana'].map(fruit => (
        <Text>{fruit}</Text>
      ))}
    </View>
  );

  return (
    <View style={styles.itemContainer}>
      {showFruitList && <FruitListWithMissingKeys />}
      <Text
        style={styles.itemTitle}
        onPress={() => setShowFruitList(!showFruitList)}>
        React Warning
      </Text>
    </View>
  );
};

const ReactErrorBoundaryExample = () => {
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error('App crashed in render!');
  }
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle} onPress={() => setThrowError(true)}>
        Throw JS Error In Render
      </Text>
    </View>
  );
};

type SectionHeaderProps = $ReadOnly<{|
  title: string,
|}>;

const SectionHeader = ({title}: SectionHeaderProps) => (
  <View>
    <Text style={styles.sectionHeader}>{title}</Text>
  </View>
);

type ListItemProps = $ReadOnly<{|
  item: {
    customRender?: () => Node,
    title: string,
    onPressHandler?: (event?: PressEvent) => mixed,
  },
|}>;

const ListItem = ({item}: ListItemProps) => {
  if (item.customRender) {
    return item.customRender();
  }
  return (
    <TouchableOpacity onPress={item.onPressHandler}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

type SettingsProps = $ReadOnly<{|
  renderErrorBoundary: boolean,
  toggleErrorBoundary: () => void,
|}>;

const Settings = ({
  renderErrorBoundary,
  toggleErrorBoundary,
}: SettingsProps) => (
  <View>
    <SectionHeader title="Settings" />
    <View style={styles.itemContainer}>
      <View style={styles.errorBoundarySwitch}>
        <Text style={styles.itemTitle} onPress={toggleErrorBoundary}>
          Use Error Boundary
        </Text>
        <Switch
          onValueChange={toggleErrorBoundary}
          value={renderErrorBoundary}
        />
      </View>
    </View>
  </View>
);

const ItemsList = () =>
  SECTIONS.map(section => {
    return (
      <View key={section.title}>
        <SectionHeader title={section.title} />

        <View>
          {section.examples.map(item => (
            <ListItem key={item.title} item={item} />
          ))}
        </View>
      </View>
    );
  });

const CrashExampleScreen = () => {
  const [renderErrorBoundary, setRenderErrorBoundary] = useState(true);

  const toggleErrorBoundary = useCallback(() => {
    setRenderErrorBoundary(!renderErrorBoundary);
  }, [renderErrorBoundary]);

  const Container = renderErrorBoundary ? ErrorBoundary : View;

  return (
    <Container>
      <Settings
        renderErrorBoundary={renderErrorBoundary}
        toggleErrorBoundary={toggleErrorBoundary}
      />
      <ItemsList />
    </Container>
  );
};

exports.framework = 'React';
exports.title = 'Crash';
exports.description = 'Crash examples.';
exports.examples = [
  {
    title: 'Crash Examples',
    render(): Node {
      return <CrashExampleScreen />;
    },
  },
];

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  itemTitle: {
    fontSize: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 5,
    backgroundColor: '#fff',
  },
  errorBoundarySwitch: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
