import { AfterViewInit, Component } from '@angular/core';
import {OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/interface/user';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.sass','../../../app.component.sass']
})
export class CountersComponent implements AfterViewInit {

  
  displayedColumns: string[] = ['coId', 'nameCounter', 'shortName', 'processName', 'limit'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  counters!:any;

  constructor(public apiService: ApiService) {
    this.dataTable();
  }
  ngAfterViewInit(): void {
  }
  

  async dataTable(){
    await this.apiService.counters().then(result =>
        {
          this.counters = result;
        }
      );
    this.dataSource = new MatTableDataSource(this.counters);
    this.dataSource.paginator = this.paginator;
  }

}
