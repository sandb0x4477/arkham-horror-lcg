import { State, Selector, Action, StateContext } from '@ngxs/store';
import produce from 'immer';

import * as actions from './settings.actions';
import { CampaignsData } from '../../shared/data/campaigns.data';
import { ScenarioData } from '../../shared/models/scenario.data.model';
import { Scenarios } from '../../shared/data/scenarios.data';
import { Card } from '../../shared/models/card.model';

export interface SettingsStateModel {
  loading: boolean;
  currentPage: string;
  selCampaign: number;
  selScenario: ScenarioData;
  selInvs: Array<string>;
  deckLists: Array<Card[]>;
  errors: Array<any>;
}

const settingsStateDefaults: SettingsStateModel = {
  loading: false,
  currentPage: 'selInv0',
  selCampaign: 0,
  selScenario: Scenarios[0],
  selInvs: ['01001', '01005'],
  deckLists: [[], []],
  errors: null,
};

@State<SettingsStateModel>({
  name: 'settings',
  defaults: settingsStateDefaults,
})
export class SettingsState {
  constructor() {}

  @Selector()
  public static getState(state: SettingsStateModel): SettingsStateModel {
    return state;
  }

  @Selector()
  public static loading(state: SettingsStateModel): boolean {
    return state.loading;
  }

  @Selector()
  public static currentPage(state: SettingsStateModel): string {
    return state.currentPage;
  }

  @Selector()
  public static selCampaign(state: SettingsStateModel): number {
    return state.selCampaign;
  }

  @Selector()
  public static selScenario(state: SettingsStateModel): ScenarioData {
    return state.selScenario;
  }

  @Selector()
  public static selInvs(state: SettingsStateModel): Array<string> {
    return state.selInvs;
  }

  @Selector()
  public static deckLists(state: SettingsStateModel): Array<Card[]> {
    return state.deckLists;
  }

  @Selector()
  public static errors(state: SettingsStateModel): Array<any> {
    return state.errors;
  }

  // ---------------------------------------------------------------------------
  // ! ACTIONS
  // ---------------------------------------------------------------------------
  @Action(actions.SwitchCampaign)
  public switchCampaign({ patchState }: StateContext<SettingsStateModel>, { payload }: actions.SwitchCampaign) {
    const campaignCode = CampaignsData[payload.id].code;
    patchState({
      selCampaign: payload.id,
      selScenario: Scenarios.filter(c => c.campaignCode === campaignCode)[0],
    });
  }

  @Action(actions.SwitchScenario)
  public switchScenario({ patchState }: StateContext<SettingsStateModel>, { payload }: actions.SwitchScenario) {
    patchState({
      selScenario: Scenarios[payload.id],
    });
  }

  @Action(actions.SwitchPage)
  public SwitchPage({ getState, patchState }: StateContext<SettingsStateModel>, { payload }: actions.SwitchPage) {
    const state = getState();
    // console.log(payload);
    if (payload.data) {
      patchState({
        currentPage: payload.id,
        selScenario: {
          ...state.selScenario,
          answers: { ...state.selScenario.answers, ...payload.data },
        },
      });
    } else {
      patchState({
        currentPage: payload.id,
      });
    }
  }

  @Action(actions.SelectInvestigator)
  public selectInvestigator(
    { getState, patchState }: StateContext<SettingsStateModel>,
    { payload }: actions.SwitchScenario,
  ) {
    const state = getState().selInvs;
    patchState({
      selInvs: produce(state, (draft: any) => {
        draft[payload.id] = payload.code;
      }),
    });
  }

  @Action(actions.SetLoading)
  public setLoading(
    { patchState }: StateContext<SettingsStateModel>,
    { payload }: actions.SwitchScenario,
  ) {
    patchState({
      loading: payload
    });
  }

  @Action(actions.ClearError)
  public clearError(
    { getState, patchState }: StateContext<SettingsStateModel>,
    { payload }: actions.SwitchScenario,
  ) {
    patchState({
      errors: null
    });
  }

  @Action(actions.SetError)
  public setError(
    { getState, patchState }: StateContext<SettingsStateModel>,
    { payload }: actions.SwitchScenario,
  ) {
    patchState({
      errors: payload.error
    });
  }

  @Action(actions.PopulateDeckList)
  public populateDeckList(
    { getState, patchState }: StateContext<SettingsStateModel>,
    { payload }: actions.SwitchScenario,
  ) {
    const state = getState().deckLists;
    patchState({
      deckLists: produce(state, (draft: any) => {
        draft[payload.id] = payload.deckList;
      }),
    });
  }
}
