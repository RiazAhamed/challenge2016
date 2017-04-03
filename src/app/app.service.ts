import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Distributors } from './distributors';

@Injectable()
export class AppService {
    constructor(
        private _http: Http
    ) {}

    getDistributors(): Observable<Distributors> {
        return this._http.get('./app/distributors.json')
            .map((response: Response) => <Distributors> response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Try Again later.');
    }
};
