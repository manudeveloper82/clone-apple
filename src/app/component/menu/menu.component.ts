import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.burgerMenuClick();
  }

  burgerMenuClick() {

  }

}
