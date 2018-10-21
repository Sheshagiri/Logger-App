import { Injectable } from '@angular/core';
import { Log } from './../models/log';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null
  });
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [{
      id: '1',
      text: 'Generated components from ts',
      date: new Date('12/27/2017')
    },
    {
      id: '2',
      text: 'Generated logs from ts',
      date: new Date('10/02/2015')
    },
    {
      id: '3',
      text: 'Generated dummy data from ts',
      date: new Date()
    }
    ];
   }

   getLogs(): Observable<Log[]> {
     return of(this.logs);
   }

   setFormLog(log: Log) {
     this.logSource.next(log);
   }

   addLog(log: Log) {
     this.logs.unshift(log);
   }

   updateLog(log: Log){
     this.logs.forEach((cur, index) => {
      if (log.id === cur.id ){
        this.logs.splice(index,1);
      }
     });
     this.logs.unshift(log);
   }

   deleteLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id ){
        this.logs.splice(index,1);
      }
     });
   }

}
