export interface StarterDeck {
  id: number;
  name: string;
  date_creation: string;
  date_update: string;
  description_md: string;
  user_id: number;
  investigator_code: string;
  investigator_name: string;
  slots: any;
  ignoreDeckLimitSlots: any;
  version: string;
  xp: any;
  xp_adjustment: any;
  exile_string: any;
  taboo_id: any;
  tags: string;
  meta?: string;
  previous_deck: any;
  next_deck: any;
}
