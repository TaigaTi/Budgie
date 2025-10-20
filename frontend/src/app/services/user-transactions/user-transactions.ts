import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/env';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

export interface Transaction {
  id: number;
  amount: number;
  date: string;
  title: string;
  description: string;
  category: string;
  categoryId: number;
  type: 'EXPENSE' | 'INCOME';
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserTransactions {
  private userTransactionsEndpoint = 'users/1/transactions';
  private transactionsSubject = new BehaviorSubject<Transaction[]>([]);
  public transactions$ = this.transactionsSubject.asObservable();

  constructor(private http: HttpClient) {}
  
  getTransactions(): Observable<Transaction[]> {
      return this.http.get<Transaction[]>(environment.API_URL + this.userTransactionsEndpoint).pipe(
        tap((transactions) => this.transactionsSubject.next(transactions))
    );
  }

  getTransactionSummary(): Observable<{ total: number; count: number, income: number, expense: number }> {
    return this.transactions$.pipe(
      map((transactions) => {
        let total = 0;
        let income = 0;
        let expense = 0;
        
        for (const tx of transactions) {
          if (tx.type === 'EXPENSE') {
            total -= tx.amount;
            expense += tx.amount;
          } else if (tx.type === 'INCOME') {
            total += tx.amount;
            income += tx.amount;
          }
        }
        return { total, count: transactions.length, income, expense };
      })
    );
  }
}
