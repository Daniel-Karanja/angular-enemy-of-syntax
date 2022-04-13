import { LogService } from './log.service';
import { Injectable } from '@angular/core';
@Injectable()
class BankingService {
  constructor(private logservice: LogService) {}

  accounts: { name: string; balance: number; type: string }[] = [
    { name: 'Edian', balance: 234, type: 'Savings Account' },
    { name: 'Joseph', balance: 0, type: 'Business Account' },
    { name: 'Mary', balance: 100000, type: 'Business Account' },
  ];

  newAccount(obj: { name: string; type: string }) {
    this.accounts.push({ ...obj, balance: 0 });
    this.logservice.logSomething('New Account Created');
  }
}

export { BankingService };
