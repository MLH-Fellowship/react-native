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

export type RNTesterBookmark = {
  Components: Object,
  Api: Object,
  AddComponent: Function,
  RemoveComponent: Function,
  AddApi: Function,
  RemoveApi: Function,
  checkComponent: Function,
};

const AddComponent = (componentName, component) => {
  bookmarks.Components[componentName] = component;
};

const RemoveComponent = (componentName) => {
  delete bookmarks.Components[componentName];
};

const AddApi = (apiName, api) => {
  bookmarks.Api[apiName] = api;
};

const RemoveApi = (apiName) => {
  delete bookmarks.Api[apiName];
};

const checkComponent = (componentName) => {
  return bookmarks.Components[componentName] === undefined;
};

export const bookmarks = {
  Components: {},
  Api: {},
  AddComponent: AddComponent,
  RemoveComponent: RemoveComponent,
  AddApi: AddApi,
  RemoveApi: RemoveApi,
  checkComponent: checkComponent,
};

export const RNTesterBookmarkContext: React.Context<RNTesterBookmark> = React.createContext(
  bookmarks,
);
