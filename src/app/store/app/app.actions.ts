export class SetPlayStatus {
  static readonly type = '[App] Set Play Status';
  constructor(public payload: boolean) {}
}
