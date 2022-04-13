import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-parent-life-cycle-comp',
  templateUrl: './parent-life-cycle-comp.component.html',
  styleUrls: ['./parent-life-cycle-comp.component.css'],
})
export class ParentLifeCycleCompComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy
{
  inputFrom = '';
  showChild = false;

  quotes: {
    id: number;
    author: string;
    poster: string;
    vote: number;
  }[] = [
    { id: 1, author: 'John', poster: 'Daniel', vote: 0 },
    { id: 2, author: 'dsadd', poster: 'Dczxcxzaniel', vote: 1 },
    { id: 1, author: 'John', poster: 'Daniel', vote: 3 },
  ];
  votedQuote!: number;

  constructor() {
    console.log('This is the PARENT Constructor:');

    for (let i = 1; i < this.quotes.length; i++) {
      if (this.quotes[i].vote > this.quotes[i - 1].vote) {
        this.votedQuote = i;
      }
    }

    console.log(this.votedQuote);
  }

  voteForQuote(index: number) {
    console.log(index);
  }

  isHighlight(i: number) {
    if (i === this.votedQuote) {
      return true;
    }
    return false;
  }

  toggleChild = () => {
    this.showChild = !this.showChild;
  };

  ngOnInit(): void {
    // console.log('This is the PARENT ngOnInit Lifecycle Hoock:');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('This is the PARENT ngOnChanges Lifecycle');
    // console.log(changes);
  }
  ngDoCheck(): void {
    // console.log('This is the PARENT ngDoCheck');
  }

  ngOnDestroy(): void {
    // console.log('This is the PARENT ngOnDestroy');
  }
}
