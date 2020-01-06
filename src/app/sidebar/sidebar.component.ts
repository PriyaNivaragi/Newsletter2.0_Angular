import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: '', class: '' },
  { path: '/leadershipmessage', title: 'Leadership Message',  icon:'', class: '' },
  { path: '/accountupdates', title: 'Account Updates',  icon:'', class: '' },
  { path: '/newslettercorner', title: 'Newsletter Corner',  icon:'', class: '' },
  { path: '/knowledgehub', title: 'Knowledge Hub',  icon:'', class: '' },
  { path: '/knowyourcustomer', title: 'Know Your Customer',  icon:'', class: '' },
  { path: '/newbees', title: 'New Bees',  icon:'', class: '' },
  { path: '/contactus', title: 'Contact us',  icon:'', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../../assets/css/sidebarnavigation.css']
})

export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
