## Concept
I have migrated the RNTester **IOS** to a different folder, which solves our initial issue of being unable to create a multi repo system.

Yarn Links/ Sym Links are a source of major headaches as Ruby and CocoaPods do not work with [sym links](https://github.com/CocoaPods/CocoaPods/issues/2382)

Hence, I am using namespaces which allows more flexibility modifying read/write control of our files


## Demo
- `cd ios-demo`
- `./start_install.sh`

As a POC the React Library is completely dependant on the `test1234` folder which is basically representing a global install in my case.
