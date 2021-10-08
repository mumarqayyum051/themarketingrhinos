import { Component, OnInit } from '@angular/core';
import { NAVLINKS } from 'src/app/constants/navbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  navlinks: any[] = NAVLINKS;
  ngOnInit() {}
}
