import { ScenarioData } from '../models/scenario.data.model';

export const Scenarios: ScenarioData[] = [
  // ---------------------------------------------------------------------------
  // ? The Gathering
  // ---------------------------------------------------------------------------
  {
    id: 0,
    campaignCode: 'core',
    active: true,
    encounter_name: 'The Gathering',
    encounter_code: 'torch',
    campaign: 'The Night of Zealot',
    scenarioNumber: '1',
    title: 'The Gathering',
    description: [
      // prettier-ignore
      // tslint:disable-next-line:max-line-length
      'You and your partners have been investigating strange events taking place in your home city of Arkham, Massachusetts. Over the past few weeks, several townspeople have mysteriously gone missing. Recently, their corpses turned up in the woods, savaged and half-eaten. \n\nThe police and newspapers have stated that wild animals are responsible, but you believe there is something else going on. You are gathered together at the lead investigator’s home to discuss these bizarre events.',
    ],
    questions: [
      {
        id: 999,
        controlName: 'difficulty',
        label: 'Difficulty',
        options: [
          {
            id: 50,
            name: 'Easy',
            value: 0,
          },
          {
            id: 51,
            name: 'Standard',
            value: 1,
          },
          {
            id: 52,
            name: 'Hard',
            value: 2,
          },
          {
            id: 53,
            name: 'Expert',
            value: 3,
          },
        ],
        active: 1,
      },
    ],
    chaosBagTokens: [
      [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 10, 10, 11, 13, 14],
      [0, 1, 1, 2, 2, 2, 3, 3, 4, 5, 10, 10, 11, 13, 14],
      [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 10, 10, 11, 13, 14],
      [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 9, 10, 10, 11, 13, 14],
    ],
    agendaCards: ['01105', '01106', '01107'],
    actCards: ['01108', '01109', '01110'],
    difficultyCards: ['01104', '01104', '01104b', '01104b'],
    locationCards: ['01111'],
    outOfPlay0: ['01116', '01117'],
    outOfPlay1: ['01112', '01113', '01114', '01115'],
    encounterDeck: [
      '01118',
      '01119',
      '01159',
      '01159',
      '01159',
      '01160',
      '01160',
      '01160',
      '01161',
      '01162',
      '01162',
      '01162',
      '01163',
      '01163',
      '01163',
      '01164',
      '01164',
      '01165',
      '01165',
      '01166',
      '01166',
      '01166',
      '01167',
      '01167',
      '01168',
      '01168',
    ],
    basicWeakness: ['01096', '01096', '01097', '01097', '01098', '01099', '01100', '01101', '01102', '01103'],
    hiddenDeck: [],
    answers: { difficulty: 1 },
  },
  // ---------------------------------------------------------------------------
  // ? The Midnight Mask
  // ---------------------------------------------------------------------------
  {
    id: 1,
    campaignCode: 'core',
    active: false,
    encounter_name: 'The Midnight Mask',
    title: 'The Midnight Mask',
    encounter_code: 'arkham',
    campaign: 'The Night of Zealot',
    scenarioNumber: '2',
    description: [
      // prettier-ignore
      // tslint:disable-next-line:max-line-length
      `The woman came to you in a panic, raving about monsters emerging
      from the ground in a home near Rivertown. “I managed to trap them,” she
      explains, “but there are others. Other pits. Other domains.” Only last week,
      you would have thought she was a lunatic. Recent events, however, have
      challenged your preconceptions of normality. You decide to hear her out.
      She introduces herself as Lita Chantler and lays out a tale that strains
      the limits of your belief. “The creatures I speak of ,” she claims, “are called
      ghouls—cruel beings who plague the crypts, caverns, and tunnels beneath the
      city of Arkham…”.
      “These creatures feed on the corpses of humans, and they are served
      by a dark cult within Arkham whose members have inexplicably come to
      worship the ancient master of the ghouls. This cult has been killing innocent
      people and feeding them to the ghouls, satiating a monstrous hunger. A dark
      balance was maintained. Until now. Recently,” Lita continues, “one of their
      lairs, where the corpses were stored, was destroyed. Since then, the ghouls have
      been more active than usual. I have tracked their movements and tried my
      best to stop them from running amok throughout the city. But I think there
      is something worse going on. The cult has been planning something darker,
      and more ominous, than anything I have yet observed. Indications are that
      this plan shall come to fruition tonight, shortly after midnight. Beyond that, I
      cannot fathom what to expect.
      “Many of the cultists,” Lita continues, “will seem like everyday people, despite
      their foul intentions. Whenever the cult meets, its members don masks shaped
      like the skulls of various animals to protect their identities from one another.
      These masks are our mark. Symbols of death and decay. We must unmask the
      cultists to expose and derail their plans. We have but a few hours. The more
      cultists we find before midnight, the better.”`,
      `In the wake of the disaster at your home, Lita Chantler, the
      red-haired woman from your parlor, lays out a tale that—even in light of
      what you have just witnessed—strains the limits of your belief. “The creatures
      in your home,” she claims, “are called ghouls—cruel beings who plague the
      crypts, caverns, and tunnels beneath the city of Arkham…”.
      “These creatures feed on the corpses of humans, and they are served
      by a dark cult within Arkham whose members have inexplicably come to
      worship the ancient master of the ghouls. This cult has been killing innocent
      people and feeding them to the ghouls, satiating a monstrous hunger. A dark
      balance was maintained. Until now. Recently,” Lita continues, “one of their
      lairs, where the corpses were stored, was destroyed. Since then, the ghouls have
      been more active than usual. I have tracked their movements and tried my
      best to stop them from running amok throughout the city. But I think there
      is something worse going on. The cult has been planning something darker,
      and more ominous, than anything I have yet observed. Indications are that
      this plan shall come to fruition tonight, shortly after midnight. Beyond that, I
      cannot fathom what to expect.
      “Many of the cultists,” Lita continues, “will seem like everyday people, despite
      their foul intentions. Whenever the cult meets, its members don masks shaped
      like the skulls of various animals to protect their identities from one another.
      These masks are our mark. Symbols of death and decay. We must unmask the
      cultists to expose and derail their plans. We have but a few hours. The more
      cultists we find before midnight, the better.”
      `,
    ],
    questions: [
      {
        id: 998,
        controlName: 'difficulty',
        label: 'Difficulty',
        options: [
          {
            id: 50,
            name: 'Easy',
            value: 0,
          },
          {
            id: 51,
            name: 'Standard',
            value: 1,
          },
          {
            id: 52,
            name: 'Hard',
            value: 2,
          },
          {
            id: 53,
            name: 'Expert',
            value: 3,
          },
        ],
        active: 1,
      },
      {
        id: 201,
        controlName: 'ghoulpriest',
        label: 'Is the Ghoul Priest still alive?',
        options: [
          {
            id: 20,
            name: 'Yes',
            value: true,
          },
          {
            id: 21,
            name: 'No',
            value: false,
          },
        ],
        active: false,
      },
      {
        id: 202,
        controlName: 'housestanding',
        label: 'Is Your House still standing?',
        options: [
          {
            id: 22,
            name: 'Yes',
            value: true,
          },
          {
            id: 23,
            name: 'No',
            value: false,
          },
        ],
        active: true,
      },
    ],
    chaosBagTokens: [
      [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 10, 10, 11, 13, 14],
      [0, 1, 1, 2, 2, 2, 3, 3, 4, 5, 10, 10, 11, 13, 14],
      [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 10, 10, 11, 13, 14],
      [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 9, 10, 10, 11, 13, 14],
    ],
    agendaCards: ['01121', '01122'],
    actCards: ['01123'],
    difficultyCards: ['01120', '01120', '01120b', '01120b'],
    locationCards: [
      '01124',
      '01125',
      '01126', // southside
      '01127', // southside
      '01128',
      '01129',
      '01130', // Downtown
      '01131', // Downtown
      '01132',
      '01133',
      '01134',
    ],
    outOfPlay0: ['01137', '01138', '01139', '01140', '01141'],
    outOfPlay1: [],
    encounterDeck: [
      '01135',
      '01135',
      '01135',
      '01136',
      '01136',
      '01167',
      '01167',
      '01168',
      '01168',
      '01170',
      '01171',
      '01171',
      '01172',
      '01172',
      '01173',
      '01173',
      '01174',
      '01174',
      '01169',
      '01169',
    ],
    basicWeakness: ['01096', '01096', '01097', '01097', '01098', '01099', '01100', '01101', '01102', '01103'],
    hiddenDeck: ['01121b', '01116', '01169'],
    extraCards: [],
    answers: { difficulty: 1 },
  },
  // ---------------------------------------------------------------------------
  // ? The Devourer Below
  // ---------------------------------------------------------------------------
  {
    id: 2,
    campaignCode: 'core',
    active: false,
    encounter_name: 'The Devourer Below',
    title: 'The Devourer Below',
    encounter_code: 'tentacles',
    campaign: 'The Night of Zealot',
    scenarioNumber: '3',
    description: [
      // prettier-ignore
      // tslint:disable-next-line:max-line-length
      `After a frantic nighttime search throughout Arkham, you have tracked
      down and questioned several members of the cult. Your findings are
      disturbing: they claim to worship a being known as Umôrdhoth, a
      monstrous entity from another realm.\n\n
      You are able to confirm much of Lita’s story: the cult is agitated over
      the destruction of a ghoul lair. However, a surprising detail also turns
      up: the one who invaded the lair and set this night’s events in motion
      was none other than Lita Chantler herself! You are not sure why this
      important detail was omitted from Lita’s story—did she tell you only
      as much as was necessary to draw you into her conflict? But in another
      light, she seems to be fighting to protect the city of Arkham from a
      terrible menace.\n\n
      The final piece of the puzzle was found written in a journal possessed by
      one of the cultists. It describes a dark ritual to be performed deep within
      the woods south of Arkham, this very night. According to the journal,
      the ritual’s completion will open a gate and bring forth the cult’s dark
      master into this world. “If the cult is not stopped,” Lita warns, “there is
      a possibility that Umôrdhoth’s vengeance will consume all in its path.”
      Frightened but determined to stop the ritual, you head into the woods…`,
    ],
    questions: [
      {
        id: 997,
        controlName: 'difficulty',
        label: 'Difficulty',
        options: [
          {
            id: 50,
            name: 'Easy',
            value: 0,
          },
          {
            id: 51,
            name: 'Standard',
            value: 1,
          },
          {
            id: 52,
            name: 'Hard',
            value: 2,
          },
          {
            id: 53,
            name: 'Expert',
            value: 3,
          },
        ],
        active: 1,
      },
      {
        id: 301,
        controlName: 'escapedcultists',
        label: 'How many Cultists got away?',
        options: [
          {
            id: 4,
            name: '0',
            value: 0,
          },
          {
            id: 5,
            name: '1',
            value: 1,
          },
          {
            id: 6,
            name: '2',
            value: 2,
          },
          {
            id: 7,
            name: '3',
            value: 3,
          },
          {
            id: 8,
            name: '4',
            value: 4,
          },
          {
            id: 9,
            name: '5',
            value: 5,
          },
          {
            id: 10,
            name: '6',
            value: 6,
          },
        ],
        active: 2,
      },
      {
        id: 302,
        controlName: 'pastmidnight',
        label: 'Is it past midnight?',
        options: [
          {
            id: 11,
            name: 'Yes',
            value: true,
          },
          {
            id: 12,
            name: 'No',
            value: false,
          },
        ],
        active: false,
      },
      {
        id: 303,
        controlName: 'ghoulpriest',
        label: 'Is the Ghoul Priest still alive?',
        options: [
          {
            id: 13,
            name: 'Yes',
            value: true,
          },
          {
            id: 14,
            name: 'No',
            value: false,
          },
        ],
        active: false,
      },
    ],
    chaosBagTokens: [
      [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 10, 10, 11, 13, 14, 15],
      [0, 1, 1, 2, 2, 2, 3, 3, 4, 5, 10, 10, 11, 13, 14, 15],
      [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 10, 10, 11, 13, 14, 15],
      [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 9, 10, 10, 11, 13, 14, 15],
    ],
    agendaCards: ['01143', '01144', '01145'],
    actCards: ['01146', '01147', '01148'],
    difficultyCards: ['01142', '01142', '01142b', '01142b'],
    locationCards: ['01149', '01150', '01151', '01152', '01153', '01154', '01155'],
    outOfPlay0: ['01157', '01156', '01170', '01137', '01138', '01139', '01140', '01141'],
    // prettier-ignore
    // tslint:disable-next-line:max-line-length
    outOfPlay1: ['01096', '01096', '01097', '01097', '01098', '01099', '01100', '01101', '01102', '01103'],
    encounterDeck: [
      '01158',
      '01158',
      '01160',
      '01160',
      '01160',
      '01161',
      '01162',
      '01162',
      '01162',
      '01163',
      '01163',
      '01163',
      '01164',
      '01164',
      '01165',
      '01165',
      '01166',
      '01166',
      '01166',
      '01169',
      '01169',
      '01169',
      '01170',
      '01171',
      '01171',
    ],
    basicWeakness: ['01096', '01096', '01097', '01097', '01098', '01099', '01100', '01101', '01102', '01103'],
    hiddenDeck: [],
    otherCards: [
      ['01175', '01175', '01176', '01176'],
      ['01177', '01177', '01178', '01178'],
      ['01179', '01180', '01180', '01180'],
      ['01181', '01181', '01182', '01182'],
    ],
    answers: { difficulty: 1 },
  },
  // ---------------------------------------------------------------------------
  // ! Extracurricular Activity
  // ---------------------------------------------------------------------------
  {
    id: 3,
    campaignCode: 'dwl',
    active: true,
    encounter_name: 'Dunwitch1',
    encounter_code: 'torch',
    campaign: 'The Dunwitch Legacy',
    scenarioNumber: '1A',
    title: 'Extracurricular Activity',
    description: [
      // prettier-ignore
      // tslint:disable-next-line:max-line-length
      'You and your partners have been investigating strange events taking place in your home city of Arkham, Massachusetts. Over the past few weeks, several townspeople have mysteriously gone missing. Recently, their corpses turned up in the woods, savaged and half-eaten. The police and newspapers have stated that wild animals are responsible, but you believe there is something else going on. You are gathered together at the lead investigator’s home to discuss these bizarre events.',
    ],
    questions: [
      {
        id: 996,
        controlName: 'difficulty',
        label: 'Difficulty',
        options: [
          {
            id: 50,
            name: 'Easy',
            value: 0,
          },
          {
            id: 51,
            name: 'Standard',
            value: 1,
          },
          {
            id: 52,
            name: 'Hard',
            value: 2,
          },
          {
            id: 53,
            name: 'Expert',
            value: 3,
          },
        ],
        active: 1,
      },
    ],
    chaosBagTokens: [
      [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 10, 10, 11, 13, 14],
      [0, 1, 1, 2, 2, 2, 3, 3, 4, 5, 10, 10, 11, 13, 14],
      [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 10, 10, 11, 13, 14],
      [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 9, 10, 10, 11, 13, 14],
    ],
    agendaCards: ['01105', '01106', '01107'],
    actCards: ['01108', '01109', '01110'],
    difficultyCards: ['01104', '01104', '01104b', '01104b'],
    locationCards: ['01111'],
    outOfPlay0: ['01116', '01117'],
    outOfPlay1: ['01112', '01113', '01114', '01115'],
    encounterDeck: [
      '01118',
      '01119',
      '01159',
      '01159',
      '01159',
      '01160',
      '01160',
      '01160',
      '01161',
      '01162',
      '01162',
      '01162',
      '01163',
      '01163',
      '01163',
      '01164',
      '01164',
      '01165',
      '01165',
      '01166',
      '01166',
      '01166',
      '01167',
      '01167',
      '01168',
      '01168',
    ],
    basicWeakness: ['01096', '01096', '01097', '01097', '01098', '01099', '01100', '01101', '01102', '01103'],
    hiddenDeck: [],
  },
];
