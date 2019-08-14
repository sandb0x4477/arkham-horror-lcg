import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss'],
})
export class TokensComponent implements OnInit {
  tokens = ['resource', 'clue', 'health', 'sanity', 'action', 'doom' ];

  constructor() {}

  ngOnInit() {}

  getTokenClass(token: any) {
    return `token ${token}`;
  }
}
