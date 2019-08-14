import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { v4 as uuid } from 'uuid';
import difference from 'lodash.difference';
import random from 'lodash.random';
import shuffle from 'lodash.shuffle';
import samplesize from 'lodash.samplesize';

import { CardsDbService } from './cards-db.service';

@Injectable()
export class ScenarioService {

  constructor(private store: Store, private cardsDbService: CardsDbService) { }
}
