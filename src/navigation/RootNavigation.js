import { createNavigationContainerRef, StackActions } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function push(...args) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(...args));
  }
}

export function pop(...args) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(...args));
  }
}

export function replace(...args) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(...args));
  }
}

export function reset(args, target = undefined, params = undefined) {
  if (navigationRef.isReady()) {
    navigationRef.resetRoot({
      index: 0,
      routes: [{ name: args, to: target, params: params }],
    });
  }
}