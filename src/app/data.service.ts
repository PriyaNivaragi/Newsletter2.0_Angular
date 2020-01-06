import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IData} from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('/newsletter/newsletter');
  }

  getModuleData(moduleId): Observable<IData[]> {
    return this.http.get<IData[]>('test');
  }
}
