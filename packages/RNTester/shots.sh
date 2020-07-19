#!/usr/bin/env bash 
# @author: YashKumarVerma <github.com/yashkumarverma>
#
# 
# set your emulator name here
MY_EMULATOR_NAME="Pixel_2_API_28"
#
# to run the script, you need to give it permissions to execute. for that, do
# chmod +x ./shot.sh
#
# if you wish, you can change the following variable to change terminal output prefix
PREFIX="      | "
#
# Your configurations end here. Time to use it 



# script variables, 
CONFIG_METRO="metro.config.js"
CONFIG_DETOX=".detoxrc.json"

# function to convert RNTester folder to detached RNTester which depends on node_modules
function init( ) { 
    echo "$PREFIX [Started] Localizing RNTester for testing"
    echo "$PREFIX Unlinking react-native repository"
    yarn unlink "react-native"

    echo "$PREFIX Installing all modules"
    yarn install --force

    echo "$PREFIX Updating Metro configurations"
    sed -i "/const reactNativePath = /c\const reactNativePath = path.resolve(__dirname, 'node_modules', 'react-native');" metro.config.js

    echo "$PREFIX SET $MY_EMULATOR_NAME as target emulator in detox configurations"
    sed -i '/"avdName": "Pixel_API_28"/c\"avdName": "$MY_EMULATOR_NAME"' .detoxrc.json
    echo "$PREFIX [Finished] Localizing RNTester for testing"
}

# function to reset chagnes done in repository to avoid git diff
function revert_changes ( ) { 
    echo "$PREFIX [Started] Revert Changes in $CONFIG_DETOX and $CONFIG_METRO"
    git checkout -- "$CONFIG_DETOX" "$CONFIG_METRO"
    echo "$PREFIX [Finished] Revert Changes in $CONFIG_DETOX and $CONFIG_METRO"
}

# function to show usage
function show_usage() {
    echo "$PREFIX"
    echo "$PREFIX $0 help           => list this menu"
    echo "$PREFIX $0 init           => to transform RNTester to version testable with Detox"
    echo "$PREFIX $0 reset          => to reset changes done in configuration files. Should be done before commiting changes"
    echo "$PREFIX $0 install        => runs ./gradlew :app:installDebug to install application on device / emulator"
    echo "$PREFIX $0 detox:build    => builds apk to be used for detox tests"
    echo "$PREFIX $0 detox:test     => runs detox tests"
}

# function to install debug apk on attached / emulated device
function gradle_app_install_debug() {
    echo "$PREFIX [Started] Installing application on attached device / emulator"
    cd android
    ./gradlew :app:installDebug
    echo "$PREFIX [Finished] Installing application on attached device / emulator"
}

# function to build detox test apk
function detox_build() {
    echo "$PREFIX [Started] Detox APK Build"
    detox build -c android.emu.debug
    echo "$PREFIX [Finished] Detox APK Build"
}

# function to test detox apk
function detox_test() { 
    echo "$PREFIX [Started] Detox APK Test"
    detox test -c android.emu.debug -l verbose
    echo "$PREFIX [Finished] Detox APK Test"
}

# check if in wrong director
if [[ -e "$CONFIG_DETOX" ]] &&  [[ -e "$CONFIG_METRO" ]] && [[ -e "RCTTest" ]];
then 
    echo 
else
    echo "$PREFIX RNTester Directory Not Identified. Exiting"
    exit 0
fi


#  command router 
#  runs after we are sure that we are in the current directory
if [[ -z $1 ]]; then
    echo "$PREFIX No arguments passed."
    show_usage

# show help commands
elif [[ "$1" = "help" ]]; 
    then show_usage

# reset local changes in configs
elif [[ "$1" = "reset" ]];
    then revert_changes

# do changes in config
elif [[ "$1" = "init" ]];
    then init

# install application
elif [[ "$1" = "install" ]];
    then gradle_app_install_debug

# build apk for testing with detox
elif [[ "$1" = "detox:build" ]];
    then detox_build

# test apk for with detox and jest
elif [[ "$1" = "detox:test" ]];
    then detox_test

# default message
else echo "$PREFIX Select a Valid choice from "
    show_usage
fi
