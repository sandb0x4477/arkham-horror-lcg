import { State, Selector } from '@ngxs/store';
import produce from 'immer';

import * as actions from './settings.actions';

export interface SettingsStateModel {
  somethig: boolean;
}

@State<SettingsStateModel>({
  name: 'settings',
  defaults: {
    somethig: false,
  },
})
export class SettingsState {
  constructor() {}

  @Selector()
  public static getState(state: SettingsStateModel): SettingsStateModel {
    return state;
  }
}
