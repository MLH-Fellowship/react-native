#!/bin/bash

mkdir -p React;
brew install bindfs;

bindfs ../test1234/React React
yarn
cd RNTester
bundle install && bundle exec pod install
open RNTesterPods.xcworkspace
