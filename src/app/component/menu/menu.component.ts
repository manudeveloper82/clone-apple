import { Component, OnInit, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isFixedMenu: boolean = false;
  menuOpened: boolean = false;

  @HostBinding('class.menu-opened')
  get navbarOpened(): boolean {
    return this.menuOpened;
  }

  constructor() {}

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (offset > 10) {
      this.isFixedMenu = true;
    } else {
      this.isFixedMenu = false;
    }
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
    document.body.classList.toggle('overflow-hidden');
  }
}
