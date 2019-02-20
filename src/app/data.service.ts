import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import{Observable, of} from 'rxjs';
import{map, catchError, tap} from 'rxjs/operators';
import { IData } from './data';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = environment.baseUrl;

  private dataUrl='moduleData';

  private getUrl='?moduleId=';

  

  constructor(private http:HttpClient) { 
    
    
  }
  getModuleData(moduleId):Observable<IData[]>{
    return this.http.get<IData[]>(this.baseUrl+this.dataUrl+this.getUrl+moduleId);  
  }

  // saveModuleData(Data : IData[]){
  //   return this.http.post(this.baseUrl+this.dataUrl, Data );
  // }
}
