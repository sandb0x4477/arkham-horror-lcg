import { CampaignData } from '../models/campign.data.model';

export const CampaignsData: CampaignData[] = [
  {
    name: 'The Night of Zealot',
    code: 'core',
    position: 1,
    cycle_position: 1,
    available: '2016-10-08',
    known: 184,
    total: 184,
    url: 'https://arkhamdb.com/set/core',
    id: 0,
    active: true,
    title: 'The Ghouls Hunger…',
    // prettier-ignore
    // tslint:disable-next-line:max-line-length
    description: 'Friday, September 18, 1925. Arkham, Massachusetts. It is the end of a long and abnormally hot summer.  The first hints of autumn beckon, but a heavy heat persists, relentless. A silent, unspoken anger grips the town. Tempers are short, and in the last week alone there have been numerous reports of townspeople coming to heated, violent blows with one another over simple misunderstandings.\n\nAnd now, a call from James Hankerson. He claims to have found a dismembered body in his barn.\n\nBlaming the weather would be too easy. There is something wrong with this town, and not a whole lot this old soothsayer can do to stop the slide. My auguries indicate a small group of investigators will soon take note of these strange happenings  and set forth to make things right. I’ll be watching their progress…but I won’t be holding my breath.',
  },
  {
    name: 'The Dunwich Legacy',
    code: 'dwl',
    position: 1,
    cycle_position: 2,
    available: '2017-01-12',
    known: 104,
    total: 104,
    url: 'https://arkhamdb.com/set/dwl',
    id: 1,
    active: false,
    title: 'Their hand is at your throats, yet ye see Them not…',
    // prettier-ignore
    // tslint:disable-next-line:max-line-length
    description: '“I’m going to burn his accursed diary, and if you men are wise\n\nyou’ll dynamite that altar-stone up there, and pull down all\n\nthe rings of standing stones on the other hills. Things like that\n\nbrought down the beings those Whateleys were so fond of...”\n\n\n –H. P. Lovecraft, “The Dunwich Horror”',
  },
  {
    name: 'The Path to Carcosa',
    code: 'ptc',
    position: 1,
    cycle_position: 3,
    available: '2017-01-12',
    known: 120,
    total: 110,
    url: 'https://arkhamdb.com/set/ptc',
    id: 2,
    active: false,
    title: 'Have You Seen the Yellow Sign?',
    // prettier-ignore
    // tslint:disable-next-line:max-line-length
    description: '“He mentioned the establishment of the Dynasty in Carcosa, the\n\nlakes which connected Hastur, Aldebaran, and the mystery of\n\nthe Hyades. He spoke of Cassilda and Camilla, and sounded the\n\ncloudy depths of Demhe and the Lake of Hali”\n\n\n– Robert W. Chambers, “The Repairer of Reputations”',
  },
];
