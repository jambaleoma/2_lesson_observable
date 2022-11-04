import { NewspaperService } from './../services/newspaper.service';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent {

  @Input() pathHouse: string | undefined;
  public newsPaperRecived: number | undefined;
  public isSubscribeToNewspaper = false;
  public sottoscrizione$: any;

  constructor(
    private newspaperService: NewspaperService
  ) { }

  subscribeToNewspaper() {
    this.isSubscribeToNewspaper = !this.isSubscribeToNewspaper;
    this.sottoscrizione$ = this.newspaperService.npe$.subscribe((n) => {
      this.newsPaperRecived = n;
    })
  }

  unSubscribeToNewspaper() {
    this.isSubscribeToNewspaper = !this.isSubscribeToNewspaper;
    this.sottoscrizione$.unsubscribe();
  }

  getButtonColour(isSub: boolean) {
    if (!isSub) {
      return 'primary';
    } else {
      return 'warn';
    }
  }

}
