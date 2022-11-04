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
  public isNewspapePublish = false;

  constructor(
    private newspaperService: NewspaperService
  ) {}

  publicNewspapers() {
    this.isNewspapePublish = true;
    this.newspaperService.startPublish();
    this.newspaperService.npe$.subscribe((newsPaper: number) => {
      this.newsPaperEmitted = newsPaper;
    });
  }

  getButtonColour(isSub: boolean) {
    if (!isSub) {
      return 'primary';
    } else {
      return 'warn';
    }
  }

}
