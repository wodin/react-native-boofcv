import { NativeModulesProxy, EventEmitter } from 'expo-modules-core';
// Import the native module. On web, it will be resolved to RNBoofCV.web.ts
// and on native platforms to RNBoofCV.ts
import RNBoofCV from './RNBoofCVModule';
import RNBoofCVView from './RNBoofCVView';
// Constants
export const PI = RNBoofCV.PI;
export const E = RNBoofCV.E;
export const EIGHT = RNBoofCV.EIGHT;
export function hello() {
    return RNBoofCV.hello();
}
export async function setValueAsync(value) {
    return await RNBoofCV.setValueAsync(value);
}
// For now the events are not going through the JSI, so we have to use its bridge equivalent.
// This will be fixed in the stable release and built into the module object.
// Note: On web, NativeModulesProxy.RNBoofCV is undefined, so we fall back to the directly imported implementation
const emitter = new EventEmitter(NativeModulesProxy.RNBoofCV ?? RNBoofCV);
export function addChangeListener(listener) {
    return emitter.addListener('onChange', listener);
}
export { RNBoofCVView };
//# sourceMappingURL=RNBoofCV.js.map