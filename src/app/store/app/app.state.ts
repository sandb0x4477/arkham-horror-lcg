import { State, Selector, Action, StateContext } from '@ngxs/store';

import { SetPlayStatus, SetMenuBarInfo, SetLoadingMain } from './app.actions';

export interface AppStateModel {
  loadingMain: boolean;
  isGameInProgress: boolean;
  campaignName: string;
  scenarioName: string;
}

const appStateDefaults: AppStateModel = {
  loadingMain: false,
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
  static loadingMain(state: AppStateModel) {
    return state.loadingMain;
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
  @Action(SetLoadingMain)
  public SetLoadingMain({ patchState }: StateContext<AppStateModel>, { payload }: SetLoadingMain) {
    patchState({
      loadingMain: payload,
    });
  }

  @Action(SetPlayStatus)
  public setPlayStatus({ patchState }: StateContext<AppStateModel>, { payload }: SetPlayStatus) {
    patchState({
      isGameInProgress: payload,
    });
  }

  @Action(SetMenuBarInfo)
  public setMenuBarInfo({ patchState }: StateContext<AppStateModel>, { payload }: SetMenuBarInfo) {
    patchState({
      campaignName: payload.campaignName,
      scenarioName: payload.scenarioName,
    });
  }
}
