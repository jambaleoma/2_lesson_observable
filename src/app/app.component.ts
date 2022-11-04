import { Component, OnInit } from '@angular/core';
import { House,  } from './model/House.model';
import { NewspaperFarm } from './model/NewspaperFarm.model';
const { v4: uuidv4 } = require('uuid');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title = 'Lezione N° 2: Observable';
  public houses: House[] = [];
  public housesColor: string[] = ['blue', 'green', 'red', 'tiffany', 'yellow'];
  public newspaperFarm: NewspaperFarm | undefined;
  
  ngOnInit(): void {

    this.newspaperFarm = {
      id: uuidv4(),
      imagePath: './../assets/image/newspaterfarm.png'
    }

    for (const hc of this.housesColor) {
      const house: House = {
        id: uuidv4(),
        isSubsribed: false
      }
      house.color = hc;
      house.imagePath = './../assets/image/' + hc + 'House.png';
      this.houses.push(house);
    }
  }
}
