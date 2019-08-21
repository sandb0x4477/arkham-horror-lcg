export class SetPlayStatus {
  static readonly type = '[App] Set Play Status';
  constructor(public payload: boolean) {}
}

export class SetMenuBarInfo {
  static readonly type = '[App]  SetMenuBarInfo';
  constructor(public payload: any) {}
}
