import { Component, OnInit } from '@angular/core';

import { IsServiceService } from '../is-service.service';
import { Observable } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

import { ImpactSheet } from '../impact-sheet';
import { ImpactSheetInterface } from '../ImpactSheetInterface';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  //public allIS = [];
  allIS = Array<ImpactSheet>();
  is : String;
  
  constructor(private service : IsServiceService) { }

  ngOnInit() {
    /* Correct one
    
    this.service.getAllIS().subscribe(data => this.allIS = data);
    setTimeout(()=>{
      this.is = JSON.stringify(this.allIS);
      console.log(this.allIS);
  }, 5000); */

  this.service.getAllIS().subscribe(data => this.allIS = data);
    setTimeout(()=>{
      this.is = JSON.stringify(this.allIS);
      console.log(this.allIS);
  }, 5000);
    
    
  }

  getIS(){
    this.service.getAllIS().subscribe(data => this.allIS = data);
    setTimeout(()=>{
      this.is = JSON.stringify(this.allIS);
      console.log(this.allIS);
  }, 5000);
  }



}
