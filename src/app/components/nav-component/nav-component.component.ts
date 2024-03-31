import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-component',
  standalone: true,
  imports: [],
  templateUrl: './nav-component.component.html',
  styleUrl: './nav-component.component.scss'
})
export class NavComponentComponent {
  menuValue:boolean=false;
  menu_icon :string ='bi bi-list';
  openMenu(){
     this.menuValue =! this.menuValue ;
     this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
   }
    closeMenu() {
     this.menuValue = false;
     this.menu_icon = 'bi bi-list';
   }
}
