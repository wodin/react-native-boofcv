# React Native BoofCV

This is an experiment. Do not use

# Prebuild the example app

```
cd example
rm -rf android index.js
git checkout .gitignore package.json yarn.lock
npx expo prebuild -p android --clean
```

# Build the typescript parts of the module

In a separate terminal window in the root of the repository:

```
yarn build
```

# Build the example app

Make sure you have an Android emulator running already. Then:

```
cd example
npx expo run:android
```
