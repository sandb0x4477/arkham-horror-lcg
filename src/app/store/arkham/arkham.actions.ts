export class AddToChaosBag {
  static readonly type = '[Chaos Bag] AddToChaosBag';
  constructor(public readonly payload: number) {}
}

export class RemoveFromChaosBag {
  static readonly type = '[Chaos Bag] RemoveFromChaosBag';
  constructor(public readonly payload: number) {}
}

export class AddTokensToAgenda {
  static readonly type = '[State] AddTokensToAgenda]';
  constructor(public payload: any) {}
}

export class ResetArkhamState {
  static readonly type = '[State] ResetArkhamState]';
}

export class SetChaosBag {
  public static readonly type = '[ChaosBag] Set Chaos Bag';
  constructor(public payload: any) {}
}

export class SetDifficultyCard {
  public static readonly type = '[Cards] Set Difficulty Card';
  constructor(public payload: any) {}
}

export class DropOnLocNav {
  public static readonly type = '[Location] Drop on Location';
  constructor(public payload: any) {}
}

export class SetScenario {
  public static readonly type = '[Scenario] Set Scenario';
  constructor(public payload: any) {}
}

export class ChangeDifficulty {
  public static readonly type = '[Scenario] Change Difficulty';
  constructor(public payload: number) {}
}

export class RemoveCard {
  public static readonly type = '[Location] Remove Location';
  constructor(public payload: any) {}
}

export class LocationSwitch {
  public static readonly type = '[Location] Location Switch';
  constructor(public payload: any) {}
}

export class NavBarSwitch {
  public static readonly type = '[Navbar] Switch Nav Item';
  constructor(public payload: any) {}
}

export class PopulateDeck {
  public static readonly type = '[Deck] Populate Deck';
  constructor(public payload: any) {}
}

export class MoveItemInArray {
  public static readonly type = '[Move] Move Card';
  constructor(public payload: any) {}
}

export class TransferArrayItem {
  public static readonly type = '[Move] Transfer Card';
  constructor(public payload: any) {}
}

export class MoveToken {
  public static readonly type = '[Token] Move Token';
  constructor(public payload: any) {}
}

export class AddTokenOnAgenda {
  public static readonly type = '[Token] Add Token on Agenda';
  constructor(public payload: any) {}
}

export class AddToken {
  public static readonly type = '[Token] Add Token';
  constructor(public payload: any) {}
}

export class RemoveToken {
  public static readonly type = '[Token] Remove Token';
  constructor(public payload: any) {}
}

export class ExhaustCard {
  public static readonly type = '[Card] Exhaust Card';
  constructor(public payload: any) {}
}

export class FlipCard {
  public static readonly type = '[Card] Flip Card';
  constructor(public payload: any) {}
}

export class FlipDeck {
  public static readonly type = '[Deck] Flip Deck';
  constructor(public payload: any) {}
}

export class ShuffleDeck {
  public static readonly type = '[Deck] Shuffle Deck';
  constructor(public payload: any) {}
}

export class NextCard {
  public static readonly type = '[Deck] Next Card';
  constructor(public payload: any) {}
}

export class PreviousCard {
  public static readonly type = '[Deck] Previous Card';
  constructor(public payload: any) {}
}

export class SpawnAcolteOnSouthSide {
  public static readonly type = '[Extra] SpawnAcolte';
}
