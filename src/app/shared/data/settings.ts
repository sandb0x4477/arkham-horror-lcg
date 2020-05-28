// prettier-ignore
// tslint:disable-next-line:max-line-length
export const InvestigatorsList = ['01001', '01002', '01003', '01004', '01005', '02001', '02002', '02003', '02004', '02005', '03001', '03002', '03003', '03004', '03005', '03006', '04001', '04002', '04003', '04004', '04005', '05001', '05002', '05003', '05004', '05005', '05006', '98007', '98013', '06001', '06002', '06003', '06004', '06005'];

export enum ChaosTokens {
  plus1,
  zero,
  minus1,
  minus2,
  minus3,
  minus4,
  minus5,
  minus6,
  minus7,
  minus8,
  skull,
  cultist,
  tablet,
  eldersign,
  autofail,
  heart,
}

export enum GameDifficulty {
  Easy,
  Standard,
  Hard,
  Expert,
}

export const ChaosBagTokens = [
  [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 10, 10, 11, 13, 14],
  [0, 1, 1, 2, 2, 2, 3, 3, 4, 5, 10, 10, 11, 13, 14],
  [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 10, 10, 11, 13, 14],
  [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 9, 10, 10, 11, 13, 14],
];

export const SingleDeckConfig = {
  className: 'card-arkham-vertical',
  top: 14,
  right: 4,
  exhaust: true,
  flipDeck: false,
  shuffleDeck: false,
  chevrons: false,
};

export const SpreadDeckConfig = {
  className: 'card-arkham-vertical',
  top: 14,
  right: 4,
  exhaust: false,
  flipDeck: false,
  shuffleDeck: false,
  chevrons: true,
};

export const LocationCardConfig = {
  className: 'card-arkham-vertical',
  top: 18,
  right: 4,
  exhaust: true,
  flipDeck: true,
  shuffleDeck: true,
  chevrons: true,
  remove: true
};

export const AgendaCardConfig = {
  className: 'card-arkham-horizontal',
  top: 18,
  right: 256,
  exhaust: true,
  flipDeck: true,
  shuffleDeck: true,
  chevrons: false,
};

export const ActCardConfig = {
  className: 'card-arkham-horizontal',
  top: 18,
  right: 4,
  exhaust: true,
  flipDeck: true,
  shuffleDeck: true,
  chevrons: false,
};
