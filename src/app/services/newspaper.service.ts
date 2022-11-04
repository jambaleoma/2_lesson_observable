import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewspaperService {

  public newsPaperEmitted: number = 1;

  public ngUnsubscribe = new Subject();

  public npe$ = new BehaviorSubject(0);

  constructor() {
    
  }

  startPublish() {
    this.npe$.next(this.newsPaperEmitted);
    this.newsPaperEmitted++;
  }

}
