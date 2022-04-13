import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges,
  DoCheck,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-child-life-cycle-comp',
  templateUrl: './child-life-cycle-comp.component.html',
  styleUrls: ['./child-life-cycle-comp.component.css'],
})
export class ChildLifeCycleCompComponent implements OnInit, OnChanges, DoCheck {
  @Input() someText = '';
  myInput = '';
  interval!: any;
  counter = 0;
  resetTimer = false;
  startTime = 0;
  timePassed = 0;

  constructor() {
    console.log('This is the CHILD Constructor:');
    if (this.resetTimer === false) {
      this.startTime = Date.now();
      this.resetTimer = true;
    }
    this.interval = setInterval(() => {
      this.counter = Date.now();
      console.log(this.counter);
      this.timePassed = (Date.now() - this.startTime) / 1000;
    }, 1000);
  }

  ngOnInit(): void {
    console.log('This is the CHILD ngOnInit Lifecycle Hoock:');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('This is the CHILD ngOnChanges Lifecycle');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('This is the CHILD ngDoCheck');
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    console.log('This is the CHILD ngOnDestroy');
  }
}
