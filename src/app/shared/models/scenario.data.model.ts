export interface ScenarioData {
  id: number;
  campaignCode: string;
  active: boolean;
  encounter_name: string;
  encounter_code: string;
  campaign: string;
  title: string;
  description?: string[];
  scenarioNumber: string;
  questions?: Question[];
  chaosBagTokens: number[][];
  agendaCards: string[];
  actCards: string[];
  difficultyCards: string[];
  locationCards: string[];
  outOfPlay0: string[];
  outOfPlay1: string[];
  encounterDeck: string[];
  basicWeakness: string[];
  hiddenDeck: string[];
  answers?: any;
  otherCards?: Array<string[]>;
  extraCards?: string[];
}

export interface Question {
  id: number;
  controlName: string;
  label: string;
  options: Option[];
  active: boolean | number;
}

export interface Option {
  id: number;
  name: string;
  value: boolean | number;
}
