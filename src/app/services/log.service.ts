import { Injectable } from '@angular/core';
import { Log } from './../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

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

   getLogs(): Log[] {
     return this.logs;
   }

}
