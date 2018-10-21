import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: {
    id: string,
    text: string;
    date: any
  }[];
  constructor() { }

  ngOnInit() {
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

}
