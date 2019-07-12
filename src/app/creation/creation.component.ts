import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ImpactSheet } from '../impact-sheet';
import { IsServiceService } from '../is-service.service';
import { Observable } from 'rxjs-observable';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  constructor(private service : IsServiceService) { }

  saved : any;
  ngOnInit() {
  }

  creationIS = new FormGroup({    // using reactive forms 
    name : new FormControl(''),
    user : new FormControl('')
  });

  model = new ImpactSheet(); // using template driven forms (set model and get values from them)

  regDomainModel = ["002 Interior Fittings","010 Coupling"];
  createIS(){
    console.log("Submitted values :"+ JSON.stringify(this.creationIS.value));
  }

  saveIS(event : Event){
    console.log("save IS called, value = "+JSON.stringify(this.model));
    this.model.id = 1;
    this.service.saveIS(this.model).subscribe(
      (data: any[]) => {
          console.log("saved data " +data);
      }
    );
  }
  
}
