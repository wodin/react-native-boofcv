import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import * as RNBoofCV from '@wodin/react-native-boofcv';

export default function App() {
  const [value, setValue] = useState();

  useEffect(() => {
    const handle = RNBoofCV.addChangeListener(listener);
    return () => {
      // RNBoofCV.removeChangeListener(handle);
    };
  }, []);

  const listener = (event) => {
    console.log(JSON.stringify(event));
    setValue(event.value);
  };

  return (
    <View style={styles.container}>
      <Text>Hello: {RNBoofCV.hello()}</Text>
      <Text>PI: {RNBoofCV.PI}</Text>
      <Text>E: {RNBoofCV.E}</Text>
      <Text>Version: {RNBoofCV.Version}</Text>
      <Text>Date: {RNBoofCV.GIT_DATE}</Text>
      <Text>SHA: {RNBoofCV.GIT_SHA}</Text>
      <Button
        title="Set!"
        onPress={() => RNBoofCV.setValueAsync('' + Math.floor(Math.random() * 100) + '!')}
      />
      <Text>Value: {value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
