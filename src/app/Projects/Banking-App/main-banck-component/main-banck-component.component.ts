import { Component, OnInit } from '@angular/core';
import { BankingService } from './../Services/banking.service';
import { LogService } from './../Services/log.service';

/*
Complete the project.
Add Deposit to account. This should change the balance
Add Withdraw to account. This should change the balance
*/

@Component({
  selector: 'app-main-banck-component',
  templateUrl: './main-banck-component.component.html',
  styleUrls: ['./main-banck-component.component.css'],
  providers: [BankingService, LogService],
})
export class MainBanckComponentComponent implements OnInit {
  accounts: { name: string; balance: number; type: string }[] = [];
  constructor(private bankService: BankingService) {}

  ngOnInit(): void {
    this.accounts = this.bankService.accounts;
  }
}
