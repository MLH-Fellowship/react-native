#!/bin/bash

mkdir -p React;
brew install bindfs;

bindfs ../react-native/React React
yarn
cd RNTester
bundle install && bundle exec pod install
open RNTesterPods.xcworkspace
