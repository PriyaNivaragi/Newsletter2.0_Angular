import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'moduleData',
  templateUrl:'./data.component.html' ,
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  public Moduledata=[];
  public Data=[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getModuleData(1).subscribe(data=> this.Moduledata=data);
  }
  getModuleData(){
    
  }

}
