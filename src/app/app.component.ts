import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Distributors } from './distributors';
import { Cities } from './cities';
import* as _ from 'lodash';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
  distributors: Distributors;
  availableCities: Cities;
  errorMessage: string;
  distributorsName: any = [];
  autoCity: any = [];
  autoState: any = [];
  autoCountry: any = [];
  showIndex: any = '';
  fieldError: any = {
    error: false,
    message: {
      noRegionError: '',
      invalidDName: '',
    }
  };
  showDistributersDetails: string = '';
  public filteredList: Array<string> = [];
  public distributorName: string;
  public distributorCity: string;
  public distributorState: string;
  public distributorCountry: string;

  constructor(
    public _appService: AppService
  ) {}

  ngOnInit () {
    this._appService.getDistributors()
      .subscribe(
          distributors => this.distributors = distributors,
          error => this.errorMessage = <any>error,
          () => this.handleingDiestibuters());

    this._appService.getCities()
      .subscribe(
          availableCities => this.availableCities = availableCities,
          error => this.errorMessage = <any>error,
          () => this.handleingCities());
  }

  handleingCities() {
    this.autoCity = _.map(this.availableCities, (e: any) => e['City Name']);
    this.autoState = _.map(this.availableCities, (e: any) => e['Province Name']);
    this.autoCountry = _.map(this.availableCities, (e: any) => e['Country Name']);
  }

  handleingDiestibuters() {
    this.distributorsName = _.map(this.distributors, (e: any) => e.name);
  }

  showDetails(index: number) {
    if (index >= 0) {
      console.log(this.distributors[index].name);
      this.showIndex = index;
    }
  }

  searchRights() {
    this.fieldError.error = false;
    this.fieldError.message.noRegionError = '';
    this.fieldError.message.invalidDName = '';

    console.log(this.distributorName, this.distributorCity, this.distributorState, this.distributorCountry);

    if ((this.distributorCity === undefined || this.distributorCity === '') &&
    (this.distributorState  === undefined || this.distributorState  === '') &&
    (this.distributorCountry === undefined || this.distributorCountry === '')) {
      this.fieldError.error = true;
      this.fieldError.message.noRegionError = 'Atlest enter city or state or country name.';
    }

    if (this.distributorName === undefined || this.distributorName === '') {
      this.fieldError.error = true;
      this.fieldError.message.invalidDName = 'Distributor name required';
    } else {
      for (let i = 0; i < this.distributors.length; i++) {
        let element: any = this.distributors[i];
        if (element.name === this.distributorName) {
          break;
        } else {
          if ((i + 1) === this.distributors.length) {
            this.fieldError.error = true;
            this.fieldError.message.invalidDName = 'Distributor name not found';
          }
        }
      }
    }
  }

};
