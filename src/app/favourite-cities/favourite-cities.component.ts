import { Component, ContentChild, OnInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { CityDetails } from 'src/assets/city-details';
import { CityComponent } from '../city/city.component';

@Component({
  selector: 'app-favourite-cities',
  templateUrl: './favourite-cities.component.html',
  styleUrls: ['./favourite-cities.component.css']
})
export class FavouriteCitiesComponent implements OnInit , AfterContentInit, AfterContentChecked {
  @ContentChild(CityComponent, {static: false}) content: CityComponent;
  name: string;
  country: string;
  citiesInfo: CityDetails[] = [{name: 'Delhi', country: 'India'},
  {name: 'NewYork', country: 'America'},
  {name: 'Rome', country: 'Italy'}
];
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // this.name = this.content.name;
    // this.country = this.citiesInfo.find(x => x.name === this.name).country;
  }

  ngAfterContentChecked() {
    this.name = this.content.name;
    this.country = this.citiesInfo.find(x => x.name === this.name).country;
  }
}
