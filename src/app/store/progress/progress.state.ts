import { State, Selector, Action, StateContext } from '@ngxs/store';

import { ShowProgressCard, NextPhase, ResetProgressState } from './progress.actions';

enum phaseName {
  'Mythos',
  'Investigation',
  'Enemy',
  'Upkeep',
}

const ProgressStateIntial = {
  turnNumber: 1,
  phase: 'Investigation',
  showProgressCard: false,
};

export interface ProgressStateModel {
  turnNumber: number;
  phase: string;
  showProgressCard: boolean;
}

@State<ProgressStateModel>({
  name: 'progress',
  defaults: ProgressStateIntial,
})
export class ProgressState {
  @Selector()
  public static getState(state: ProgressStateModel): ProgressStateModel {
    return state;
  }

  @Action(ShowProgressCard)
  public showProgressCard({ getState, patchState }: StateContext<ProgressStateModel>) {
    const state = getState().showProgressCard;
    patchState({
      showProgressCard: !state,
    });
  }

  @Action(NextPhase)
  public nextPhase({ getState, patchState }: StateContext<ProgressStateModel>) {
    const statePhase = getState().phase;
    const stateTurnNumber = getState().turnNumber;
    const phaseNext = phaseName[statePhase] + 1;
    if (phaseNext === 4) {
      patchState({
        phase: phaseName[0],
        turnNumber: stateTurnNumber + 1,
      });
    } else {
      patchState({
        phase: phaseName[phaseNext],
      });
    }
  }

  @Action(ResetProgressState)
  public resetProgressState({ getState, setState }: StateContext<ProgressStateModel>) {
    const state = getState();
    setState({
      ...state,
      ...ProgressStateIntial,
    });
  }
}
