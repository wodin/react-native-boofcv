import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';
const NativeView = requireNativeViewManager('RNBoofCV');
export default function RNBoofCVView(props) {
    return React.createElement(NativeView, { name: props.name });
}
//# sourceMappingURL=RNBoofCVView.js.map