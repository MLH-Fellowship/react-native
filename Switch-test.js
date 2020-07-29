/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+react_native
 * @format
 */

/* global device, element, by, expect */
const {
  openComponentWithLabel,
  openExampleWithTitle,
} = require('../e2e-helpers');

const jestExpect = require('expect');

describe('Switch', () => {
  beforeAll(async () => {
    await device.reloadReactNative();
    await openComponentWithLabel('<Switch>', '<Switch> Native boolean input');
  });

  it('Should be initially be in it\'s "off" state, and toggle appropriately', async () => {
    await openExampleWithTitle('Switches can be set to true or false');
    await expect(element(by.id('on-off-initial-off-indicator'))).toHaveText(
      'Off',
    );
    await element(by.id('on-off-initial-off')).tap();
    await expect(element(by.id('on-off-initial-off-indicator'))).toHaveText(
      'On',
    );
  });

  it('Should not toggle when disabled', async () => {
    await openExampleWithTitle('Switches can be disabled');
    await expect(element(by.id('disabled-initial-off-indicator'))).toHaveText(
      'Off',
    );
    try {
      await element(by.id('disabled-initial-off')).tap();
    } catch (err) {
      console.log(err);
      jestExpect(err.message).toEqual(
        jestExpect.stringContaining(
          'Cannot perform action due to constraint(s) failure',
        ),
      );
    }

    await expect(element(by.id('disabled-initial-off-indicator'))).toHaveText(
      'Off',
    );
  });
});
