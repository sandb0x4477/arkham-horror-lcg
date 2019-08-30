import { ScenarioData } from '../models/scenario.data.model';

export const Scenarios: ScenarioData[] = [
  // ---------------------------------------------------------------------------
  // ! The Gathering
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
  // ! The Midnight Mask
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
  // ! The Devourer Below
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
    encounter_name: 'Extracurricular Activity',
    encounter_code: 'torch',
    campaign: 'The Dunwitch Legacy',
    scenarioNumber: '1A',
    title: 'Extracurricular Activity',
    description: [
      // prettier-ignore
      // tslint:disable-next-line:max-line-length
      `Dr. Armitage is worried his colleague, Professor Warren Rice, might be in trouble, so he has asked for your help in finding his friend. He seems unreasonably nervous about his colleague’s disappearance considering Professor Rice has only been “missing” for a matter of hours…`,
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
    agendaCards: ['02042', '02043', '02044'],
    actCards: ['02045', '02046', '02047'],
    difficultyCards: ['02041', '02041', '02041b', '02041b'],
    locationCards: ['02048', '02049', '02050', '02051', '02053', '02056'],
    outOfPlay0: ['02054', '02055', '02052', '02057'],
    outOfPlay1: ['02060', '02061', '02059', '02058'],
    encounterDeck: [
      '02083',
      '02083',
      '02083',
      '02084',
      '02084',
      '02084',
      '02100',
      '02100',
      '02101',
      '02101',
      '02102',
      '02102',
      '02085',
      '02085',
      '02086',
      '02086',
      '02086',
      '02087',
      '02090',
      '02090',
      '02090',
      '02091',
      '02091',
      '01166',
      '01166',
      '01166',
      '01174',
      '01174',
      '01177',
      '01177',
      '01178',
      '01178',
    ],
    basicWeakness: [
      '01096',
      '01096',
      '01097',
      '01097',
      '01098',
      '01099',
      '01100',
      '01101',
      '01102',
      '01103',
      '02037',
      '02038',
      '02039',
    ],
    hiddenDeck: [],
  },
  // ---------------------------------------------------------------------------
  // ! The House Always Wins
  // ---------------------------------------------------------------------------
  {
    id: 4,
    campaignCode: 'dwl',
    active: false,
    encounter_name: 'The House Always Wins',
    encounter_code: 'torch',
    campaign: 'The Dunwitch Legacy',
    scenarioNumber: '1B',
    title: 'The House Always Wins',
    description: [
      // prettier-ignore
      // tslint:disable-next-line:max-line-length
      `Dr. Armitage suggested you track down his associate Dr. Francis Morgan.
      He’s not sure whether Dr. Morgan is in trouble, but he’s not particularly
      happy with his colleague’s present choice of company. He’s in the Clover Club,
      a notorious gambling joint somewhere downtown. Finding the club’s exact
      location isn’t easy—you have to grease a few palms just to learn which of the
      Downtown restaurants operates as the club’s front. That restaurant is La
      Bella Luna, a somewhat upscale Italian eatery by the theatre. You change into
      your Sunday best and make your way there.\n\n
      In front of La Bella Luna stands a man in a pinstripe suit who sizes you up as
      you approach. “Enjoy yourselves,” he says with a snake-like grin as he holds
      open the restaurant’s front door.`,
    ],
    questions: [
      {
        id: 995,
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
    agendaCards: ['02063', '02064', '02065'],
    actCards: ['02066', '02067', '02068', '02069', '02074'],
    difficultyCards: ['02062', '02062', '02062b', '02062b'],
    locationCards: ['02070', '02071', '02072', '02073'],
    outOfPlay0: ['02078', '02079', '02080', '02074', '02075', '02076', '02077'],
    outOfPlay1: ['01165', '01165', '01164', '01164', '01163', '01163', '01163', '02104', '02103', '02103'],
    encounterDeck: [
      '02081',
      '02081',
      '02082',
      '02082',
      '02092',
      '02092',
      '02092',
      '02093',
      '02093',
      '02093',
      '02097',
      '02097',
      '02098',
      '02098',
      '02099',
      '02099',
      '01159',
      '01159',
      '01159',
    ],
    basicWeakness: [
      '01096',
      '01096',
      '01097',
      '01097',
      '01098',
      '01099',
      '01100',
      '01101',
      '01102',
      '01103',
      '02037',
      '02038',
      '02039',
    ],
    hiddenDeck: [],
  },
  // ---------------------------------------------------------------------------
  // ! The Miskatonic Museum
  // ---------------------------------------------------------------------------
  {
    id: 5,
    campaignCode: 'dwl',
    active: false,
    encounter_name: 'The Miskatonic Museum',
    encounter_code: 'torch',
    campaign: 'The Dunwitch Legacy',
    scenarioNumber: '2',
    title: 'The Miskatonic Museum',
    description: [
      // prettier-ignore
      // tslint:disable-next-line:max-line-length
      `Several months ago, Armitage and his colleagues
      stopped a rampaging horror from tearing
      through Dunwich, a backwater town several
      hours north and west of Arkham. At first you
      imagine this beast as a rabid bear, or worse, but
      the professor’s description of the creature paints
      a different picture.\n\n
      It all began when a man named Wilbur Whateley entered the Orne
      Library looking for Olaus Wormius’s Latin translation of a book called
      the Necronomicon. Wilbur already possessed a beaten-up English
      translation by Dr. John Dee, but it was insufficient for his purposes.
      Armitage turned the man away, fearing what use the strange man had
      for the book. Whateley returned in secret, hoping to steal the book ,
      but was attacked by a hound guarding the university. Armitage, Rice,
      and Morgan later discovered Whateley’s body. A description of the foul
      corpse—semi-anthropomorphic and covered in fur, with a leathery
      hide and greenish-grey tentacles—causes you to question whether or
      not Whateley was truly human`,
    ],
    questions: [
      {
        id: 994,
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
    agendaCards: ['02119', '02120', '02121'],
    actCards: ['02122', '02123', '02124', '02125'],
    difficultyCards: ['02118', '02118', '02118b', '02118b'],
    locationCards: ['02126', '02127', '02128', '02129', '02130', '02131'],
    outOfPlay0: ['02138', '02139', '02140', '02142'],
    outOfPlay1: ['02137', '02132', '02133', '02134', '02135', '02136'],
    encounterDeck: [
      '02141',
      '02143',
      '02143',
      '02144',
      '02144',
      '02144',
      '02145',
      '02145',
      '02146',
      '02146',
      '02092',
      '02092',
      '02092',
      '02093',
      '02093',
      '02093',
      '02083',
      '02083',
      '02083',
      '02084',
      '02084',
      '02084',
      '02100',
      '02100',
      '02101',
      '02101',
      '02102',
      '02102',
      '01167',
      '01167',
      '01168',
      '01168',
      '01174',
      '01174',
    ],
    basicWeakness: [
      '01096',
      '01096',
      '01097',
      '01097',
      '01098',
      '01099',
      '01100',
      '01101',
      '01102',
      '01103',
      '02037',
      '02038',
      '02039',
    ],
    hiddenDeck: [],
  },
  // ---------------------------------------------------------------------------
  // ! The Essex County Express
  // ---------------------------------------------------------------------------
  {
    id: 6,
    campaignCode: 'dwl',
    active: false,
    encounter_name: 'The Essex County Express',
    encounter_code: 'torch',
    campaign: 'The Dunwitch Legacy',
    scenarioNumber: '3',
    title: 'The Essex County Express',
    description: [
      // prettier-ignore
      // tslint:disable-next-line:max-line-length
      `Recent events in the Museum have forced you to
      re-evaluate Armitage’s tale about Dunwich. It
      cannot be a coincidence—Wilbur Whateley, the
      Necronomicon, the creature from Dunwich, and
      the people and creatures who attacked here in
      Arkham —everything must be connected. You’re
      certain now where you must head: the lonely
      and dismal town of Dunwich Village.\n
      You consider telling the Massachusetts State Police what you know, but
      the negative consequences outweigh the potential gain. Given the nature
      of your story, they would likely write your stories off as an absurd hoax.
      Worse, they could lock you up. After all, you were present in an illegal
      speakeasy, and you also trespassed in the museum. Instead, you decide
      to head to Dunwich yourself, in order to investigate further.\n
      You pack everything you think you might need and manage to get
      some rest for the night. In the morning, you head to the train station in
      Northside and purchase a last-minute express ticket. Dunwich is several
      hours by train northwest along the Miskatonic River Valley. There is no
      train station in Dunwich, but you manage to phone one of Armitage’s
      acquaintances in the small village: a man by the name of Zebulon
      Whateley who was present during the events several months ago.
      Armitage’s notes indicate that the Whateley family is spread across
      many branches, some decadent and unscrupulous, others “undecayed”
      or otherwise untouched by nefarious and diabolic rites. According to
      Armitage, Zebulon’s branch of the family lay somewhere between the
      decayed and undecayed Whateleys, who knew of the traditions of his
      ancestors, but was not corrupted by them. He agrees to pick you up at
      the closest station and drive you into town.\n
      As the train departs from Arkham, you feel the events of the previous
      night catching up to you, and exhaustion sets in. But before you can
      safely reach your destination, the train car suddenly rumbles and
      shakes, startling you out of your reverie. The train loudly skids to a
      violent halt, and you hear a rattling noise behind you…`,
    ],
    questions: [
      {
        id: 993,
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
      [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 10, 10, 11, 13, 14],
      [0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 10, 10, 11, 13, 14],
      [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 10, 10, 11, 13, 14],
      [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 9, 10, 10, 11, 13, 14],
    ],
    agendaCards: ['02160', '02161', '02162', '02163', '02164'],
    actCards: ['02165', '02166'],
    difficultyCards: ['02159', '02159', '02159b', '02159b'],
    locationCards: ['02167', '02168', '02169', '02170', '02171', '02172', '02173', '02174', '02175', '02176', '02177'],
    outOfPlay0: ['02178', '02178', '02178', '02178'],
    outOfPlay1: [],
    encounterDeck: [
      '02179',
      '02179',
      '02179',
      '02180',
      '02180',
      '02180',
      '02181',
      '02181',
      '02181',
      '02182',
      '02182',
      '02183',
      '02183',
      '02100',
      '02100',
      '02101',
      '02101',
      '02102',
      '02102',
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
    basicWeakness: [
      '01096',
      '01096',
      '01097',
      '01097',
      '01098',
      '01099',
      '01100',
      '01101',
      '01102',
      '01103',
      '02037',
      '02038',
      '02039',
    ],
    hiddenDeck: [],
  },
  // ---------------------------------------------------------------------------
  // ! Blood on the Altar
  // ---------------------------------------------------------------------------
  {
    id: 7,
    campaignCode: 'dwl',
    active: false,
    encounter_name: 'Blood on the Altar',
    encounter_code: 'torch',
    campaign: 'The Dunwitch Legacy',
    scenarioNumber: '4',
    title: 'Blood on the Altar',
    description: [
      // prettier-ignore
      // tslint:disable-next-line:max-line-length
      `When you finally reach Dunwich, you are greeted by Zebulon Whateley and Earl Sawyer, another man from the village who had met with Dr. Armitage during the incident several months ago. “Things ain’t lookin’ too good here,” Earl tells you. “Some folk up and went missin’ a few nights ago. ‘Dem whippoorwills won’ shut up. Dunno what yer doin’ here, but last time you Arkham folk came ‘round it was bad news. Very bad news.” His eyes blink rapidly, and he coughs and looks away.\n “Look, why don’t you rest fer the night an’ look fer whatever it is yer looking fer t’morra,” Zebulon chimes in, putting a wrinkled hand on your shoulder. You begin to protest, but your aching muscles and weary mind won’t allow you to refuse. The elderly man offers to take you in for the night, and drives you to his home at the outskirts of Dunwich village. The town is disheveled and eerie, and you find yourself wishing you hadn’t come here at all. You fall asleep on the ride over and scarcely remember anything else from that night.\n When you awaken, you find that Zebulon’s house is abandoned, andthere is no sign of the elderly man, or of Mr. Sawyer. Fearing the worst, you head into the village of Dunwich to investigate, hoping to find answers.`,
    ],
    questions: [
      {
        id: 992,
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
      [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 10, 10, 11, 13, 14],
      [0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 10, 10, 11, 13, 14],
      [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 10, 10, 11, 13, 14],
      [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 9, 10, 10, 11, 13, 14],
    ],
    agendaCards: ['02196', '02197', '02198'],
    actCards: ['02199', '02200'],
    difficultyCards: ['02195', '02195', '02195b', '02195b'],
    locationCards: [
      '02201',
      '02202',
      '02203',
      '02204',
      '02205',
      '02206',
      '02207',
      '02208',
      '02209',
      '02210',
      '02211',
      '02212',
      '02213',
    ],
    outOfPlay0: ['02219', '02216', '02080', '02061', '02040', '02218', '02217'],
    outOfPlay1: ['02099', '02099', '02098', '02098', '02097', '02097'],
    encounterDeck: [
      '02220',
      '02220',
      '02220',
      '02221',
      '02221',
      '02222',
      '02222',
      '02223',
      '02223',
      '02223',
      '02224',
      '02224',
      '02224',
      '02088',
      '02088',
      '02089',
      '02089',
      '02090',
      '02090',
      '02090',
      '02091',
      '02091',
      '01172',
      '01172',
      '01173',
      '01173',
      '01166',
      '01166',
      '01166',
    ],
    basicWeakness: [
      '01096',
      '01096',
      '01097',
      '01097',
      '01098',
      '01099',
      '01100',
      '01101',
      '01102',
      '01103',
      '02037',
      '02038',
      '02039',
    ],
    hiddenDeck: [],
  },
  // ---------------------------------------------------------------------------
  // ! Undimensioned and Unseen
  // ---------------------------------------------------------------------------
  {
    id: 8,
    campaignCode: 'dwl',
    active: false,
    encounter_name: 'Undimensioned and Unseen',
    encounter_code: 'torch',
    campaign: 'The Dunwitch Legacy',
    scenarioNumber: '5',
    title: 'Undimensioned and Unseen',
    description: [
      'info',
    ],
    questions: [
      {
        id: 990,
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
      [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 10, 10, 11, 13, 14],
      [0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 10, 10, 11, 13, 14],
      [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 10, 10, 11, 13, 14],
      [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 9, 10, 10, 11, 13, 14],
    ],
    agendaCards: ['02237', '02238', '02239'],
    actCards: ['02240', '02241'],
    difficultyCards: ['02236', '02236', '02236b', '02236b'],
    locationCards: [
      '02242',
      '02243',
      '02244',
      '02245',
      '02246',
      '02247',
      '02248',
      '02249',
      '02250',
      '02251',
      '02252',
      '02253',
    ],
    outOfPlay0: [],
    outOfPlay1: ['02255', '02255', '02255', '02255', '02255', '02254', '02254', '02254', '02254'],
    encounterDeck: [
      '02256',
      '02256',
      '02256',
      '02256',
      '02257',
      '02257',
      '02257',
      '02258',
      '02258',
      '02259',
      '02259',
      '02090',
      '02090',
      '02090',
      '02096',
      '02096',
      '02091',
      '02091',
      '02094',
      '02094',
      '02095',
      '02095',
      '02088',
      '02088',
      '02089',
      '02089',
      '01164',
      '01164',
      '01163',
      '01163',
      '01163',
      '01165',
      '01165',
    ],
    basicWeakness: [
      '01096',
      '01096',
      '01097',
      '01097',
      '01098',
      '01099',
      '01100',
      '01101',
      '01102',
      '01103',
      '02037',
      '02038',
      '02039',
    ],
    hiddenDeck: [],
  },
];
