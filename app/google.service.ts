import { Injectable, Inject } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()

export class GoogleService {

    constructor(private http: Http) { }

    load(lng,ltd): Observable<any> {
        return this.http
            .get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+lng+','+ltd)
            .map(res => res.json());
    }
}