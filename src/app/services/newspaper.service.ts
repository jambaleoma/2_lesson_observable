import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewspaperService {

  public newsPaperEmitted: number = 1;

  constructor() {
    
  }

  startPublish() {

  }

}
