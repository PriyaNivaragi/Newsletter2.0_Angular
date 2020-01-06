import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData().subscribe(value => {
      this.data = value;
    }, error => {
      alert(error);
    });
  }

}
