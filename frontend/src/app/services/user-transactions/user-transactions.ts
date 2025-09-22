import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/env';

@Injectable({
  providedIn: 'root'
})
export class UserTransactions {
  private userTransactionsEndpoint = '/api/user/1/transactions';

  constructor(private http: HttpClient) {}
  
  getTransactions() {
    return this.http.get(`${environment.API_URL}${this.userTransactionsEndpoint}`);
  }
}
