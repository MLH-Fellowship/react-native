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

describe('Modal', () => {
  beforeAll(async () => {
    await device.reloadReactNative();
    await openComponentWithLabel(
      '<Modal>',
      '<Modal> Component for presenting modal views.',
    );
  });

  it('should show content on button click', async () => {
    await openExampleWithTitle('Basic Modal');
    await element(by.text('READ MORE')).tap();
    await expect(element(by.text('PROCEED'))).toBeVisible();
    // await waitFor(element(by.id(''))).toBeVisible().whileElement(by.id('')).scroll('down');
    await element(by.text('PROCEED')).tap();
    await expect(element(by.text('PROCEED'))).not.toBeVisible();
  });

  it('should cover full screen with statusBarTranslucent enabled', async () => {
    await openExampleWithTitle('Status Bar Behavior with Modal');
    await element(by.text('OPEN IN FULL SCREEN VIEW')).tap();
    await expect(element(by.text('PROCEED'))).toBeVisible();
    await element(by.text('PROCEED')).tap();
    await expect(element(by.text('PROCEED'))).not.toBeVisible();
  });

  it('should listen and launch action for back button press', async () => {
    await openExampleWithTitle('Actions on physical back button');
    await element(by.text('LISTEN FOR CLOSE ACTION')).tap();
    await device.pressBack();
    await element(by.text('OK')).tap();
    await expect(element(by.text('PROCEED'))).toBeVisible();
    await element(by.text('PROCEED')).tap();
    await expect(element(by.text('PROCEED'))).not.toBeVisible();
  });

  it('should listen for onShow event', async () => {
    await openExampleWithTitle('Modal OnShow Actions');
    await element(by.text('OPEN MODAL')).tap();
    await expect(element(by.text('Welcome User'))).toBeVisible();
    await element(by.text('OK')).tap();
    await expect(element(by.text('PROCEED'))).toBeVisible();
    await element(by.text('PROCEED')).tap();
    await expect(element(by.text('PROCEED'))).not.toBeVisible();
  });
});
