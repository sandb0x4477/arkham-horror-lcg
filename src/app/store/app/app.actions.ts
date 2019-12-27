export class SetLoadingMain {
  static readonly type = '[App] SetLoadingMain';
  constructor(public payload: boolean) {}
}
export class SetPlayStatus {
  static readonly type = '[App] Set Play Status';
  constructor(public payload: boolean) {}
}

export class SetMenuBarInfo {
  static readonly type = '[App] SetMenuBarInfo';
  constructor(public payload: any) {}
}

export class SetIsPlayPage {
  static readonly type = '[App] SetIsPlayPage';
  constructor(public payload: boolean) {}
}
