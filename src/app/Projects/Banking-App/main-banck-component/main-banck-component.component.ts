import { Component, OnInit } from '@angular/core';
import { BankingService } from './../Services/banking.service';
import { LogService } from './../Services/log.service';

/*
Complete the project.
Add Deposit to account. This should change the balance
Add Withdraw to account. This should change the balance
Emit an event whem someone Deposits
Emit an event whem someone Withdraws
*/

@Component({
  selector: 'app-main-banck-component',
  templateUrl: './main-banck-component.component.html',
  styleUrls: ['./main-banck-component.component.css'],
  providers: [BankingService, LogService],
})
export class MainBanckComponentComponent implements OnInit {
  accounts: { name: string; balance: number; type: string }[] = [];
  constructor(private bankService: BankingService) {
    this.bankService.someEvent.subscribe((event: any) => console.log(event));
  }

  ngOnInit(): void {
    this.accounts = this.bankService.accounts;
  }
}
