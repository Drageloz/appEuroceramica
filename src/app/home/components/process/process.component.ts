import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.sass']
})
export class ProcessComponent implements OnInit {
//Componente para el rango de calendario
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  
  constructor() { }

  ngOnInit(): void {
  }

}
