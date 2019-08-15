import { State, Selector, Action, StateContext } from '@ngxs/store';

import { SetPlayStatus } from './app.actions';

export interface AppStateModel {
  loading: boolean;
  isGameInProgress: boolean;
  campaignName: string;
  scenarioName: string;
}

const appStateDefaults: AppStateModel = {
  loading: false,
  isGameInProgress: false,
  campaignName: 'Arkham Horror',
  scenarioName: 'The Card Game',
};

@State<AppStateModel>({
  name: 'app',
  defaults: appStateDefaults,
})
export class AppState {
  constructor() {}

  @Selector()
  public static getState(state: AppStateModel) {
    return state;
  }

  @Selector()
  static loading(state: AppStateModel) {
    return state.loading;
  }

  @Selector()
  static isGameInProgress(state: AppStateModel) {
    return state.isGameInProgress;
  }

  @Selector()
  static campaignName(state: AppStateModel) {
    return state.campaignName;
  }

  @Selector()
  static scenarioName(state: AppStateModel) {
    return state.scenarioName;
  }

  // ---------------------------------------------------------------------------
  // ! ACTIONS
  // ---------------------------------------------------------------------------
  @Action(SetPlayStatus)
  public setPlayStatus({ patchState }: StateContext<AppStateModel>, { payload }: SetPlayStatus) {
    patchState({
      isGameInProgress: payload,
    });
  }
}
