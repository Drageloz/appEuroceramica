import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  async logout(){
    localStorage.setItem("sesion", "inactiva");
    this.router.navigate(['/login']);
  }
}
