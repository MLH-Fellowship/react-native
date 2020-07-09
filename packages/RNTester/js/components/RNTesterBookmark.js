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
};

export const bookmarks = {
  Components: {},
  Api: {},
};

export const RNTesterThemeContext: React.Context<RNTesterBookmark> = React.createContext(
  bookmarks,
);
