import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { user } from './user.mock';

@Component({
  selector: 'fg-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.sass']
})
export class IdComponent implements OnInit {
  public id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => this.id = params['id']
    );
  }

  userJson(): string {
    return JSON.stringify(user);
  }

}
