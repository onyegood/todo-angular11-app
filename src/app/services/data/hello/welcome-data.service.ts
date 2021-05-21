import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_BASE_URL } from '../constants';
import { Hello } from 'src/app/models/Hello';

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService() {
    return this.http.get<Hello>(SERVER_BASE_URL+'/hello');
  }

  executeHelloWorldBeanServiceById(id: string) {
    return this.http.get<Hello>(SERVER_BASE_URL + `/hello/${id}`);
  }
}
