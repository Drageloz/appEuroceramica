import { Component } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/interface/user';
import { UsersService } from 'src/app/service/users.service';


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

  constructor(public userService: UsersService) {
    this.dataTable();
  }
  
  ngAfterViewInit(): void {
    
  }

  async dataTable(){
    // Create 100 users
    await this.userService.users().then(result =>
        {
          this.users = result;
        }
      );
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.paginator = this.paginator;
  }

    
}
