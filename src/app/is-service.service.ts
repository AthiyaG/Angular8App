import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ImpactSheet } from './impact-sheet';
import { Observable, Subscriber  } from 'rxjs';
//import { Observable } from  "rxjs/Observable";

import { tap, map, filter } from 'rxjs/operators';
import { ImpactSheetInterface } from './ImpactSheetInterface';

@Injectable({
  providedIn: 'root'
})
export class IsServiceService{

  impactSheetObs : Observable<ImpactSheet[]>;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
    }

    getAllIS() : Observable<ImpactSheetInterface[]>{
      return this.http.get<ImpactSheetInterface[]>("http://localhost:8080/fih/getAllIS");
    }

    saveIS(impactSheet:ImpactSheet)  {
      debugger;
      return this.http.post("http://localhost:8080/fih/saveIS",impactSheet);
    }

}
