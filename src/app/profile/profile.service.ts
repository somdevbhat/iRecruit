import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Profile } from './profile';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttpClient } from '../oauth/httpClient';


@Injectable()

export class ProfileService {

  constructor(private http: Http, private _http: HttpClient) {

  }

  private profilesUrl = '/irecruit/profile';

  getProfiles(): Promise<Profile[]> {
  let token = JSON.parse(window.localStorage.getItem('token'));
    return this.http.get(this.profilesUrl+"?access_token="+ token.value)
      .toPromise()
      .then(response => response.json() as Profile[])
      .catch(this.handleError);
  }
  
  getProfilesByEmail(email) {

    return this._http.get(this.profilesUrl +'/' + email)
      .map((response: Response) => response)
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}