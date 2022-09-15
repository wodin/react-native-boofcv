import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { RNBoofCVViewProps } from './RNBoofCV.types';

const NativeView: React.ComponentType<RNBoofCVViewProps> =
  requireNativeViewManager('RNBoofCV');

export default function RNBoofCVView(props: RNBoofCVViewProps) {
  return <NativeView name={props.name} />;
}
