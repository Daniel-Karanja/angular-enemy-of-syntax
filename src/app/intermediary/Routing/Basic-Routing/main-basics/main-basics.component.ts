import { Component, OnInit } from '@angular/core';
import { BasicRoutingService } from '../service/basic_routing.service';

@Component({
  selector: 'app-main-basics',
  templateUrl: './main-basics.component.html',
  styleUrls: ['./main-basics.component.css'],
  providers: [BasicRoutingService],
})
export class MainBasicsComponent implements OnInit {
  //Asignment: Have A back Button that goes to the previous page when pressed aoutomatically
  pageToShow: any = [];

  constructor(private basicRouting: BasicRoutingService) {}

  ngOnInit(): void {
    this.pageToShow = this.basicRouting.pageToShow;
  }
}
