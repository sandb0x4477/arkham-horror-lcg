import { State, Selector, Action, StateContext } from '@ngxs/store';
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
  @Selector()
  public static getState(state: ToolsStateModel) {
    return state;
  }

  @Selector()
  static loading(state: ToolsStateModel) {
    return state.loading;
  }

  @Selector()
  static activeTab(state: ToolsStateModel) {
    return state.activeTab;
  }

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
