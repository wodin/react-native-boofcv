import { StyleSheet, Text, View } from 'react-native';

import * as RNBoofCV from '@wodin/react-native-boofcv';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{RNBoofCV.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
