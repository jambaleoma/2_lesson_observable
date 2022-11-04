import { NewspaperService } from './../services/newspaper.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-newspaper-farm',
  templateUrl: './newspaper-farm.component.html',
  styleUrls: ['./newspaper-farm.component.scss']
})
export class NewspaperFarmComponent {

  @Input() pathNewspaperFarm: string | undefined;
  public newsPaperEmitted: number | undefined;

  constructor(
    private newspaperService: NewspaperService
  ) {}

  publicNewspapers() {

  }

  getButtonColour(isSub: boolean) {
    if (!isSub) {
      return 'primary';
    } else {
      return 'warn';
    }
  }

}
