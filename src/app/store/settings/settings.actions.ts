export class SwitchCampaign {
  static readonly type = '[Campaign] Switch Campaign';
  constructor(public payload: any) {}
}

export class SwitchScenario {
  static readonly type = '[Scenario] Switch Scenario';
  constructor(public payload: any) {}
}

export class NextPage {
  static readonly type = '[Scenario] Next Page';
}

export class PreviousPage {
  static readonly type = '[Scenario] Previous Page';
}

export class SwitchPage {
  static readonly type = '[Scenario] Switch Page';
  constructor(public payload: any) {}
}

export class SelectInvestigator {
  static readonly type = '[Scenario] Select Investigator';
  constructor(public payload: any) {}
}

export class PopulateDeckList {
  static readonly type = '[Scenario] Populate DeckList';
  constructor(public payload: any) {}
}

export class SetLoading {
  static readonly type = '[Scenario] Set Loading';
  constructor(public payload: any) {}
}

export class SetError {
  static readonly type = '[Scenario] Set Error';
  constructor(public payload: any) {}
}

export class ClearError {
  static readonly type = '[Scenario] Clear Error';
  constructor(public payload: any) {}
}

export class SetIntroText {
  static readonly type = '[Scenario] Set Intro Text';
  constructor(public payload: string) {}
}

export type SettingsActions =
  | SwitchCampaign
  | SwitchScenario
  | SwitchPage
  | SelectInvestigator
  | PopulateDeckList
  | SetLoading
  | ClearError
  | NextPage
  | PreviousPage
  | SetError
  | SetIntroText;
