import { Component, Inject, OnInit } from '@angular/core';

import { Store } from 'redux';

import { STAT_STORE } from '../state/store';

import { Stats } from '../state/stats';

@Component({
  selector: 'app-bmr-history',
  templateUrl: './bmr-history.component.html',
  styleUrls: ['./bmr-history.component.css']
})
export class BmrHistoryComponent implements OnInit {

  public series: number[] = null;
  public title = 'BMR History';

  constructor(@Inject(STAT_STORE)private statStore: Store<Stats>) { }

  ngOnInit() {
    this.onChanges();
    this.statStore.subscribe(() => this.onChanges());
  }

  private onChanges() {
    this.series = [...this.statStore.getState().bmrHistory];
  }

}
