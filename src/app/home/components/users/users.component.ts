import { Component } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/interface/user';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass','../../../app.component.sass']
})
export class UsersComponent implements AfterViewInit {

  displayedColumns: string[] = ['usId', 'usPass', 'usProfile', 'usStatus', 'usUser'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  users!:any;

  constructor(public apiService: ApiService) {
    this.dataTable();
  }
  
  ngAfterViewInit(): void {
    
  }

  async dataTable(){
    await this.apiService.users().then(result =>
        {
          console.log(result);
          this.users = result;
        }
      );
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.paginator = this.paginator;
  }

    
}
