/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

"use strict";

import React, { useState } from "react";
import { StyleSheet, Text, View, Keyboard, TextInput } from "react-native";

const EventListenerExample = () => {
  console.log("Attaching Listeners");
  const [lastEvent, setLastEvent] = useState("Waiting for event");

  Keyboard.addListener("keyboardWillShow", () => {
    setLastEvent("keyboardWillShow");
  });
  Keyboard.addListener("keyboardDidShow", () => {
    setLastEvent("keyboardDidShow");
  });
  Keyboard.addListener("keyboardWillHide", () => {
    setLastEvent("keyboardWillHide");
  });
  Keyboard.addListener("keyboardDidHide", () => {
    setLastEvent("keyboardDidHide");
  });
  Keyboard.addListener("keyboardWillChangeFrame", () => {
    setLastEvent("keyboardWillChangeFrame");
  });
  Keyboard.addListener("keyboardDidChangeFrame", () => {
    setLastEvent("keyboardDidChangeFrame");
  });

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Click here ..."
        onSubmitEditing={Keyboard.dismiss}
      />
      <Text>Last Event : {lastEvent}</Text>
    </View>
  );
};

const KeyboardDismissExample = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Type something ..."
        onFocus={() => {
          setTimeout(() => {
            Keyboard.dismiss();
          }, 2 * 1000);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    padding: 10,
    borderWidth: 0.5,
    backgroundColor: "#fff",
  },
});

exports.title = "Keyboard";
exports.description =
  "The Keyboard module allows you to listen for native events and react to them, as well as make changes to the keyboard, like dismissing it.";
exports.examples = [
  {
    title: "Listening for keyboard events",
    description:
      "The following example shows the events as they are emitted by the keyboard api.",
    render: () => <EventListenerExample />,
  },
  {
    title: "Dismiss API",
    description:
      "The dismiss api is used to dismiss the active keyboard on screen. This example automatically closes the keyboard after 2 seconds for demonstration",
    render: () => <KeyboardDismissExample />,
  },
];

exports.android = true;
exports.ios = true;
