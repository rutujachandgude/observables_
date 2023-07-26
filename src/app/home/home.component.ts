import { Component, OnInit } from '@angular/core';
import {Subscription, interval} from 'rxjs';
import { count } from 'rxjs-compat/operator/count';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
private firstObsSubscription:Subscription;
  constructor() { 

  }

  ngOnInit() {
  //  interval(period:1000).subscribe(next:count =>{
  //   console.log(count);
  //  });
  }

}
