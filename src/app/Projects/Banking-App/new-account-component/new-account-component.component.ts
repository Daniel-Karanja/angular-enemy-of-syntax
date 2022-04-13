import { Component, OnInit } from '@angular/core';
import { BankingService } from './../Services/banking.service';
import { LogService } from './../Services/log.service';
@Component({
  selector: 'app-new-account-component',
  templateUrl: './new-account-component.component.html',
  styleUrls: ['./new-account-component.component.css'],
})
export class NewAccountComponentComponent implements OnInit {
  name!: string;
  type!: string;
  accounts!: any[];
  constructor(private bankingService: BankingService) {}

  ngOnInit(): void {
    this.accounts = this.bankingService.accounts;
  }

  createNewAccount() {
    console.log(this.name, ' ', this.type);
    if (this.name === '' || this.type == '') {
      return;
    }

    this.bankingService.newAccount({ name: this.name, type: this.type });
  }
}
