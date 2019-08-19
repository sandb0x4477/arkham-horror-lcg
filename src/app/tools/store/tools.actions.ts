export class SetActiveTab {
  static readonly type = '[Navigation] SetActiveTab]';
  constructor(public readonly payload: string) {}
}

export class SetLoading {
  static readonly type = '[State] SetLoading]';
  constructor(public readonly payload: boolean) {}
}
