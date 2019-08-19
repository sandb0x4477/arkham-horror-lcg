import { State, Selector, Action, StateContext, Store } from '@ngxs/store';

import { SetActiveTab } from './tools.actions';
import { SetLoading } from '../../new-game/store/settings.actions';

export interface ToolsStateModel {
  loading: boolean;
  activeTab: string;
}

@State<ToolsStateModel>({
  name: 'tools',
  defaults: {
    loading: false,
    activeTab: 'chaosBag',
  },
})
export class ToolsState {

  constructor(private store: Store) {}

  @Selector()
  public static getState(state: ToolsStateModel) {
    return state;
  }

  @Selector()
  public static loading(state: ToolsStateModel) {
    return state.loading;
  }

  @Selector()
  public static activeTab(state: ToolsStateModel) {
    return state.activeTab;
  }

  // @Selector()
  // public static chaosBag(state: ArkhamStateModel) {
  //   return state.chaosBag;
  // }

  // ---------------------------------------------------------------------------
  // ! ACTIONS
  // ---------------------------------------------------------------------------
  @Action(SetLoading)
  public setLoading({ patchState }: StateContext<ToolsStateModel>, { payload }: SetLoading) {
    patchState({
      loading: payload,
    });
  }

  @Action(SetActiveTab)
  public setActiveTab({ patchState }: StateContext<ToolsStateModel>, { payload }: SetActiveTab) {
    patchState({
      activeTab: payload,
    });
  }
}
