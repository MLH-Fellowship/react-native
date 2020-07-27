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

describe('Switch', () => {
  beforeAll(async () => {
    await device.reloadReactNative();
    await openComponentWithLabel('<Switch>', '<Switch> Native boolean input');
  });

  /** testing Basic Switch Example */
  it('should toggle with text changes', async () => {
    await openExampleWithTitle('Basic Switch');

    /** ensure initial behavior of components */
    await expect(element(by.id('switch-basic-off-indicator'))).toHaveText(
      'Off',
    );
    await expect(element(by.id('switch-basic-on-indicator'))).toHaveText('On');

    /** interact with switches */
    await element(by.id('switch-basic-off')).tap();
    await element(by.id('switch-basic-on')).tap();

    /** ensure final behavior of switches */
    await expect(element(by.id('switch-basic-on-indicator'))).toHaveText('Off');
    await expect(element(by.id('switch-basic-off-indicator'))).toHaveText('On');
  });

  /** testing Disabled Switch Example */
  it('should not be interactable when disabled', async () => {
    await openExampleWithTitle('Disabled Switches');

    /** ensure initial behavior of components */
    await expect(
      element(by.id('switch-disabled-initial-off-indicator')),
    ).toHaveText('Off');
    await expect(
      element(by.id('switch-disabled-initial-on-indicator')),
    ).toHaveText('On');

    /** interact with switches */
    await element(by.id('switch-disabled-initial-off')).tap();
    await element(by.id('switch-disabled-initial-on')).tap();

    /** ensure final behavior of switches to be same as initial */
    await expect(
      element(by.id('switch-disabled-initial-off-indicator')),
    ).toHaveText('Off');
    await expect(
      element(by.id('switch-disabled-initial-on-indicator')),
    ).toHaveText('On');
  });

  /** testing onChange prop in Switch Example */
  it('should trigger function via onChange prop', async () => {
    await openExampleWithTitle('Watching Switch Interactions');

    /** ensure initial behavior of components */
    await expect(element(by.id('switch-on-change-indicator'))).toHaveText(
      'Off',
    );
    await expect(element(by.text('Times Switched : 0'))).toBeVisible();

    /** interact with switches 5 times to increase counter */
    await element(by.id('switch-on-change')).multiTap(5);

    /** ensure final behavior of switches to have counter=5 and final switch state to be On */
    await expect(element(by.text('Times Switched : 5'))).toBeVisible();
    await expect(element(by.id('switch-on-change-indicator'))).toHaveText('On');
  });

  /** testing onValueChange prop in Switch Example */
  it('should return current value via onValueChange prop', async () => {
    await openExampleWithTitle('Reading data from switch component');

    /** ensure initial behavior of components */
    await expect(element(by.id('switch-on-value-change-indicator'))).toHaveText(
      'Off',
    );
    await expect(
      element(by.id('on-value-change-switch-target-indicator')),
    ).toHaveText('Off');

    /** interact with switches 5 times to increase counter */
    await element(by.id('switch-on-value-change')).tap();

    /** ensure final behavior of switches to have counter=5 and final switch state to be On */
    await expect(element(by.id('switch-on-value-change-indicator'))).toHaveText(
      'On',
    );
    await expect(
      element(by.id('on-value-change-switch-target-indicator')),
    ).toHaveText('On');
  });

  /** testing visibility of styled examples using thumbColor prop */
  it('should be visible with thumbColor prop', async () => {
    await openExampleWithTitle('Styling Switch Knob');

    /** ensure initial behavior of components */
    await expect(element(by.id('switch-thumb-color-indicator'))).toHaveText(
      'Off',
    );

    /** interact with switches */
    await element(by.id('switch-thumb-color')).tap();

    /** ensure final behavior of switches */
    await expect(element(by.id('switch-thumb-color-indicator'))).toHaveText(
      'On',
    );
  });

  /** testing visibility of styled examples using trackColor prop */
  it('should be visible with trackColor prop', async () => {
    await openExampleWithTitle('Styling Switch Track');

    /** ensure initial behavior of components */
    await expect(element(by.id('switch-track-color-indicator'))).toHaveText(
      'Off',
    );

    /** interact with switches */
    await element(by.id('switch-track-color')).tap();

    /** ensure final behavior of switches */
    await expect(element(by.id('switch-track-color-indicator'))).toHaveText(
      'On',
    );
  });

  /** testing visibility of styled examples using trackColor and thumbColor prop both */
  it('should be visible with trackColor and thumbColor prop', async () => {
    await openExampleWithTitle('Completely Styling Components');

    /** ensure initial behavior of components */
    await expect(element(by.id('switch-style-indicator'))).toHaveText('Off');
    await expect(element(by.id('switch-style-b-indicator'))).toHaveText('Off');

    /** interact with switches */
    await element(by.id('switch-style')).tap();

    /** ensure final behavior of switches */
    await expect(element(by.id('switch-style-indicator'))).toHaveText('On');
    await expect(element(by.id('switch-style-b-indicator'))).toHaveText('On');
  });
});
