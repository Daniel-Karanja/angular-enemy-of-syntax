import { Component, OnInit } from '@angular/core';
import { BasicRoutingService } from '../service/basic_routing.service';
@Component({
  selector: 'app-header-basics',
  templateUrl: './header-basics.component.html',
  styleUrls: ['./header-basics.component.css'],
})
export class HeaderBasicsComponent implements OnInit {
  pagesToshow: any = [];
  constructor(private basicRoutingService: BasicRoutingService) {}

  ngOnInit(): void {
    this.pagesToshow = this.basicRoutingService.pageToShow;
  }

  switchPages(page: string) {
    console.log(page);
    this.basicRoutingService.SwitchPage(page);
  }
}
