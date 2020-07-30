const {NativeModules} = require('react-native');

const RCTAsyncStorage =
  NativeModules.PlatformLocalStorage || // Support for external modules, like react-native-windows
  NativeModules.RNTester_AsyncSQLiteDBStorage ||
  NativeModules.RNCAsyncStorage;

export default RCTAsyncStorage;
