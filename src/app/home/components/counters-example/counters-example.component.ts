import { Component, OnInit } from '@angular/core';
import { CountersExample } from 'src/app/interface/counterExample';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-counters-example',
  templateUrl: './counters-example.component.html',
  styleUrls: ['./counters-example.component.sass']
})
export class CountersExampleComponent implements OnInit{

  data!:Array<CountersExample>;
  number:any;

  constructor(public apiService: ApiService) { 
    
  }

  ngOnInit(): void {
    setInterval(() => {
      this.getValue();
  }, 200);
  }

  async getValue(){
    await this.apiService.countersExample().then(result =>
      {
        this.data = result;
        this.number = this.data[0].ceValue;
      }

    );
  }

  async increment(){
    await this.apiService.incrementCountersExample().then(result =>
      {
        this.data = result;
        this.number = this.data[0].ceValue;
      }

    );
  }

  async decrement(){
    await this.apiService.decrementCountersExample().then(result =>
      {
        this.data = result;
        this.number = this.data[0].ceValue;
      }

    );
  }

}
