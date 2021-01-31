import { Component } from '@angular/core';
import {OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/interface/user';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.sass']
})
export class CountersComponent implements OnInit {

  
  displayedColumns: string[] = ['Id', 'Nombre Contador', 'Nombre Corto', 'Nombre Proceso', 'Tope'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  counters!:any;

  constructor(public apiService: ApiService) {
    this.dataTable();
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

  async dataTable(){
    // Create 100 users
    await this.apiService.counters().then(result =>
        {
          console.log(result);
          this.counters = result;
        }
      );
    this.dataSource = new MatTableDataSource(this.counters);
    this.dataSource.paginator = this.paginator;
  }

}
