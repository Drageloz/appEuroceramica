import { Component, HostListener } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'views';

  //Se agrega el hostListener para que submenu se desactive cuando se haga click
  @HostListener('click', ['$event'])
  unselect(event: any){      
      const submenusActives = document.getElementsByClassName("container_slidebar-submenu") as HTMLCollectionOf<HTMLElement>;
      for(let i = 0; i< submenusActives.length; i++){
        if(submenusActives[i].style.display == "block"){
          console.log("entra");
          submenusActives[i].style.display = "none";
        }
      };
  } 

}
