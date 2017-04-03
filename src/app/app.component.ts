import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Distributors } from './distributors';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
  distributors: Distributors;
  errorMessage: string;
  showDistributersDetails: string = '';

  constructor(
    public _appService: AppService
  ) {}

  ngOnInit () {
    this._appService.getDistributors()
      .subscribe(
          distributors => this.distributors = distributors,
          error => this.errorMessage = <any>error,
          () => this.handleingRepos());
  }

  handleingRepos() {
    console.log(this.distributors);
  }

  showDetails(index: number) {
    if (index >= 0) {
      console.log(this.distributors[index].name);
    }
  }

};
