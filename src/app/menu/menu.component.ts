import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
  
})
export class MenuComponent implements AfterViewInit {

  

  constructor(public router: Router, private elementRef:ElementRef) {
  }

  ngAfterViewInit(): void {
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  //activa el color del menu y realiza el llamado de la función para activar el submenú
  async active(menu: HTMLElement, submenu: HTMLElement){
    if(submenu.style.display == "block"){
      submenu.style.display = "none";
      return;
    }
    //se agrea un delay debido a que en app component el @hostlistener actua muy rápido y bloquea la muestra del submenu
    await this.delay(10);
    const buttonsActives = document.getElementsByClassName("container_slidebar--active");
    for(let i = 0; i< buttonsActives.length; i++){
      buttonsActives[i].className = "container_slidebar_menu container_slidebar" + "--" + buttonsActives[i].id;
    }
    menu.className = "container_slidebar_menu container_slidebar" + "--" + menu.id + " container_slidebar--active";
    this.activeSubmenu(menu, submenu);

    
  }

  //activa el submenu luego de dar click sobre el menú
  activeSubmenu(menu: HTMLElement, submenu: HTMLElement){
      
      const submenusActives = document.getElementsByClassName("container_slidebar-submenu") as HTMLCollectionOf<HTMLElement>;
      for(let i = 0; i< submenusActives.length; i++){
        submenusActives[i].style.display = "none";
      }
      //utiliza las propiedades del top y right del menú para definir la posición del submenú enfrente del menu
      submenu.style.top = menu.getBoundingClientRect().top + "px";
      submenu.style.left = (menu.getBoundingClientRect().right + 5) + "px";
      console.log(submenu.style.display);
      submenu.style.display = "block";
  }


  //deslogea al usuario
  async logout(){
    localStorage.setItem("sesion", "inactiva");
    this.router.navigate(['/login']);
  }


  

}
