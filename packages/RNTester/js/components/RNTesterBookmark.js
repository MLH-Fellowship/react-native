/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

import * as React from 'react';
import AsyncStorage from '../utils/AsyncStorage';

export type RNTesterBookmark = {
  Components: Object,
  Api: Object,
  AddComponent: Function,
  RemoveComponent: Function,
  AddApi: Function,
  RemoveApi: Function,
  checkBookmark: Function,
};

const AddComponent = (componentName, component) => {
  bookmarks.Components[componentName] = component;
  AsyncStorage.setItem('Components', JSON.stringify(bookmarks.Components));
};

const RemoveComponent = (componentName) => {
  delete bookmarks.Components[componentName];
  AsyncStorage.setItem('Components', JSON.stringify(bookmarks.Components));
};

const AddApi = (apiName, api) => {
  bookmarks.Api[apiName] = api;
  AsyncStorage.setItem('Api', JSON.stringify(bookmarks.Api));
};

const RemoveApi = (apiName) => {
  delete bookmarks.Api[apiName];
  AsyncStorage.setItem('Api', JSON.stringify(bookmarks.Api));
};

const checkBookmark = (title, key) => {
  if (key === 'APIS') {
    return bookmarks.Api[title] === undefined;
  }
  return bookmarks.Components[title] === undefined;
};

export const bookmarks = {
  Components: {},
  Api: {},
  AddComponent: AddComponent,
  RemoveComponent: RemoveComponent,
  AddApi: AddApi,
  RemoveApi: RemoveApi,
  checkBookmark: checkBookmark,
};

export const RNTesterBookmarkContext: React.Context<RNTesterBookmark> = React.createContext(
  bookmarks,
);
