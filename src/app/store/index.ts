import { ActionReducerMap } from '@ngrx/store';
// import {
//   counterFeatureName,
//   reducer as counterReducer,
// } from './counter/counter.reducer';
import {
  authFeatureKey,
  reducer as authReducer,
  State as AuthState,
} from './auth/auth.reducer';

// contador
// export const appReducer: ActionReducerMap<any> = {
//   [counterFeatureName]: counterReducer,
// };

export interface AppState {
  [authFeatureKey]: AuthState;
}

export const appReducer: ActionReducerMap<AppState> = {
  [authFeatureKey]: authReducer,
};
