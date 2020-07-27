/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';

import React, {useState} from 'react';
import {Switch, Text, View, StyleSheet} from 'react-native';

type OnOffIndicatorProps = $ReadOnly<{|on: boolean, testID: string|}>;
function OnOffIndicator({on, testID}: OnOffIndicatorProps) {
  return <Text testID={testID}>{on ? 'On' : 'Off'}</Text>;
}

type ExampleRowProps = $ReadOnly<{|children: React.Node|}>;
function ExampleRow({children}: ExampleRowProps) {
  return <View style={styles.Row}>{children}</View>;
}

/** Demonstrate Basic Switch Example which listens for events and updates accompanying text */
const ExampleSwitchBasic = () => {
  const [falseSwitchStatus, setFalseSwitchStatus] = useState(false);
  const [trueSwitchStatus, setTrueSwitchStatus] = useState(true);

  return (
    <View>
      <ExampleRow>
        <Switch
          testID="switch-basic-off"
          onValueChange={value => setFalseSwitchStatus(value)}
          value={falseSwitchStatus}
        />
        <OnOffIndicator
          on={falseSwitchStatus}
          testID="switch-basic-off-indicator"
        />
      </ExampleRow>
      <ExampleRow>
        <Switch
          testID="switch-basic-on"
          onValueChange={value => setTrueSwitchStatus(value)}
          value={trueSwitchStatus}
        />
        <OnOffIndicator
          on={trueSwitchStatus}
          testID="switch-basic-on-indicator"
        />
      </ExampleRow>
    </View>
  );
};

/** Disabled Switch example which user cannot interact with */
const ExampleSwitchDisabled = () => {
  const [switchAStatus, setSwitchAStatus] = useState(false);
  const [switchBStatus, setSwitchBStatus] = useState(true);

  return (
    <View>
      <ExampleRow>
        <Switch
          testID="switch-disabled-initial-off"
          disabled={true}
          onValueChange={value => setSwitchAStatus(value)}
          value={switchAStatus}
        />

        <OnOffIndicator
          on={switchAStatus}
          testID="switch-disabled-initial-off-indicator"
        />
      </ExampleRow>

      <ExampleRow>
        <Switch
          testID="switch-disabled-initial-on"
          disabled={true}
          onValueChange={value => setSwitchBStatus(true)}
          value={switchBStatus}
        />

        <OnOffIndicator
          on={switchBStatus}
          testID="switch-disabled-initial-on-indicator"
        />
      </ExampleRow>
    </View>
  );
};

/** Demonstrates onChange prop, updates counter showing the number of times switch is changed */
const ExampleSwitchOnChange = () => {
  const [switchStatus, setSwitchStatus] = useState(false);
  const [timesInteracted, setTimesInteracted] = useState(0);

  return (
    <View>
      <ExampleRow>
        <Switch
          testID="switch-on-change"
          onValueChange={value => setSwitchStatus(value)}
          onChange={() => setTimesInteracted(timesInteracted + 1)}
          value={switchStatus}
        />

        <OnOffIndicator on={switchStatus} testID="switch-on-change-indicator" />
      </ExampleRow>

      <ExampleRow>
        <Text>Times Switched : {timesInteracted}</Text>
      </ExampleRow>
    </View>
  );
};

/** Demonstrates onValueChange prop, by updating another component based on this component */
const ExampleSwitchOnValueChange = () => {
  const [switchStatus, setSwitchStatus] = useState(false);
  return (
    <View>
      <ExampleRow>
        <Switch
          testID="switch-on-value-change"
          onValueChange={value => setSwitchStatus(value)}
          value={switchStatus}
        />

        <OnOffIndicator
          on={switchStatus}
          testID="switch-on-value-change-indicator"
        />
      </ExampleRow>

      <ExampleRow>
        <Text>
          The following switch has the same value as returned by the above
          switch, and won't change unless the above is changed. This also shows
          that switches are a controlled components
        </Text>
      </ExampleRow>
      <ExampleRow>
        <Switch testId="on-value-change-switch-target" value={switchStatus} />
        <OnOffIndicator
          on={switchStatus}
          testID="on-value-change-switch-target-indicator"
        />
      </ExampleRow>
    </View>
  );
};

/** Demonstrates thumbColor prop, by showing a switch with themed knob */
const ExampleSwitchThumbColor = () => {
  const [switchStatus, setSwitchStatus] = useState(false);
  return (
    <View>
      <ExampleRow>
        <Switch
          testID="switch-thumb-color"
          onValueChange={value => setSwitchStatus(value)}
          value={switchStatus}
          thumbColor="black"
        />

        <OnOffIndicator
          on={switchStatus}
          testID="switch-thumb-color-indicator"
        />
      </ExampleRow>
    </View>
  );
};

/** Demonstrates trackColor prop, by showing a switch with themed track */
const ExampleSwitchTrackColor = () => {
  const [switchStatus, setSwitchStatus] = useState(false);
  return (
    <View>
      <ExampleRow>
        <Switch
          testID="switch-track-color"
          onValueChange={value => setSwitchStatus(value)}
          value={switchStatus}
          trackColor={{
            false: '#D32F2F',
            true: 'black',
          }}
        />

        <OnOffIndicator
          on={switchStatus}
          testID="switch-track-color-indicator"
        />
      </ExampleRow>
    </View>
  );
};

/** Demonstrates trackColor and trackColor prop, by showing a switch with themed track */
const ExampleSwitchStyle = () => {
  const [switchStatus, setSwitchStatus] = useState(false);
  return (
    <View>
      <ExampleRow>
        <Switch
          testID="switch-style"
          onValueChange={value => setSwitchStatus(value)}
          value={switchStatus}
          trackColor={{
            false: '#D32F2F',
            true: 'green',
          }}
          thumbColor="black"
        />

        <OnOffIndicator on={switchStatus} testID="switch-style-indicator" />
      </ExampleRow>
      <ExampleRow>
        <Switch
          testID="switch-style-b"
          onValueChange={value => setSwitchStatus(value)}
          value={switchStatus}
          trackColor={{
            false: 'black',
            true: 'black',
          }}
          thumbColor="green"
        />

        <OnOffIndicator on={switchStatus} testID="switch-style-b-indicator" />
      </ExampleRow>
    </View>
  );
};

const ExampleSwitchBackgroundColor = () => {
  const [switchStatus, setSwitchStatus] = useState(false);
  return (
    <View>
      <ExampleRow>
        <Switch
          testID="switch-color"
          onValueChange={value => setSwitchStatus(value)}
          value={switchStatus}
          color="black"
        />

        <OnOffIndicator on={switchStatus} testID="switch-color-indicator" />
      </ExampleRow>
    </View>
  );
};

exports.title = '<Switch>';
exports.displayName = 'SwitchExample';
exports.description = 'Native boolean input';
exports.examples = [
  {
    title: 'Basic Switch',
    description:
      'A simple switch, uses styling of the platform by default and can be assigned initial values as props',
    render: function(): React.Node {
      return <ExampleSwitchBasic />;
    },
  },
  {
    title: 'Disabled Switches',
    description:
      'Switches can be disabled by the disabled={true} prop. Try using it to allow features only for premium users.',
    render: function(): React.Node {
      return <ExampleSwitchDisabled />;
    },
  },
  {
    title: 'Watching Switch Interactions',
    description:
      'The onChange prop can be used to trigger a function every time the component is interacted with. Below it updates the counter every time the switch is toggled ',
    render: function(): React.Node {
      return <ExampleSwitchOnChange />;
    },
  },
  {
    title: 'Reading data from switch component',
    description:
      'Switches return the boolean output using the onValueChange prop, which can be attached to any listener or function. These are triggered every time the switch value changes. All the examples use this prop to show "On/Off" on this screen ',
    render: function(): React.Node {
      return <ExampleSwitchOnValueChange />;
    },
  },
  {
    title: 'Styling Switch Knob',
    description:
      'The switch knob can be styled using the thumbColor prop as per the application theme',
    render: function(): React.Node {
      return <ExampleSwitchThumbColor />;
    },
  },
  {
    title: 'Styling Switch Track',
    description:
      'The switch track can be styled using the trackColor prop as per the application theme',
    render: function(): React.Node {
      return <ExampleSwitchTrackColor />;
    },
  },
  {
    title: 'Completely Styling Components',
    description:
      'The switch component can be completely styled as required using the above two props',
    render: function(): React.Node {
      return <ExampleSwitchStyle />;
    },
  },
  {
    title: 'Background Color',
    platform: 'ios',
    description: 'The background color can be set using the color prop.',
    render: function(): React.Node {
      return <ExampleSwitchBackgroundColor />;
    },
  },
];

const styles = StyleSheet.create({
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});
