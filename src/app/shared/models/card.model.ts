export interface Card {
  _id?: string;
  id?: string;
  exhausted?: boolean;
  faceUp?: boolean;
  pack_code: string;
  pack_name: string;
  type_code: string;
  type_name: string;
  faction_code: string;
  faction_name: string;
  position: number;
  exceptional: boolean;
  code: string;
  name: string;
  real_name: string;
  subname?: string;
  text?: string;
  real_text?: string;
  quantity: number;
  skill_willpower?: number;
  skill_intellect?: number;
  skill_combat?: number;
  skill_agility?: number;
  clues_fixed: boolean;
  health?: number;
  health_per_investigator: boolean;
  sanity?: number;
  deck_limit?: number;
  traits?: string;
  real_traits?: string;
  deck_requirements?: Deckrequirements;
  deck_options?: Deckoption[];
  flavor?: string;
  illustrator?: string;
  is_unique: boolean;
  exile: boolean;
  hidden: boolean;
  permanent: boolean;
  double_sided: boolean;
  back_text?: string;
  back_flavor?: string;
  octgn_id: string;
  url: string;
  imagesrc: string;
  backimagesrc?: string;
  cost?: number;
  skill_wild?: number;
  slot?: string;
  restrictions?: any;
  subtype_code?: string;
  subtype_name?: string;
  xp?: number;
  enemy_damage?: number;
  enemy_horror?: number;
  enemy_fight?: number;
  enemy_evade?: number;
  encounter_code?: string;
  encounter_name?: string;
  encounter_position?: number;
  spoiler?: number;
  tokens: Token[];
  doom?: number;
  stage?: number;
  back_name?: string;
  clues?: number;
  shroud?: number;
  victory?: number;
  linked_to_code?: string;
  linked_to_name?: string;
  location_marker?: string;
  linked_card?: Linkedcard;
  current_location?: string;
  location_marker_faceUp?: string;
  exits?: string[];
  exits_faceUp?: string[];
  qtyInDeck?: number;
}

interface Token {
  tokenId: string;
  qty: number;
  x: number;
  y: number;
}

interface Linkedcard {
  pack_code: string;
  pack_name: string;
  type_code: string;
  type_name: string;
  faction_code: string;
  faction_name: string;
  encounter_code: string;
  encounter_name: string;
  id: number;
  position: number;
  exceptional: boolean;
  encounter_position: number;
  code: string;
  name: string;
  real_name: string;
  subname: string;
  cost?: any;
  text: string;
  real_text: string;
  quantity: number;
  skill_willpower?: any;
  skill_intellect?: any;
  skill_combat?: any;
  skill_agility?: any;
  skill_wild?: any;
  xp?: any;
  shroud?: any;
  clues?: any;
  clues_fixed: boolean;
  doom?: any;
  health: number;
  health_per_investigator: boolean;
  sanity?: any;
  enemy_damage: number;
  enemy_horror: number;
  enemy_fight: number;
  enemy_evade: number;
  victory: number;
  vengeance?: any;
  deck_limit?: any;
  slot?: any;
  stage?: any;
  traits: string;
  real_traits: string;
  deck_requirements?: any;
  deck_options?: any;
  restrictions?: any;
  flavor: string;
  illustrator: string;
  is_unique: boolean;
  exile: boolean;
  hidden: boolean;
  permanent: boolean;
  double_sided: boolean;
  back_text?: any;
  back_flavor?: any;
  back_name?: any;
  octgn_id: string;
  url: string;
  imagesrc: string;
  spoiler: number;
}

interface Deckoption {
  faction: string[];
  level: Level;
}

interface Level {
  min: number;
  max: number;
}

interface Deckrequirements {
  size: number;
  random: Random[];
}

interface Random {
  target: string;
  value: string;
}
