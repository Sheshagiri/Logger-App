import { Log } from './../../models/log';
import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;
  isNew = true;

  constructor(private logService: LogService) { }

  ngOnInit() {
    // Subscribe to the selectedLog Observable
    this.logService.selectedLog.subscribe(log => {
      if (log.id !== null) {
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
        console.log('inside ngOnInit of log form component');
        console.log(log);
      }
    });
  }

  onSubmit() {
    if (this.isNew) {
      const newLog = {
        id: UUID.UUID(),
        text: this.text,
        date: new Date()
      };
      this.logService.addLog(newLog);
    } else {
      const updLog = {
        id: this.id,
        text: this.text,
        date: new Date()
      };
      this.logService.updateLog(updLog);
    }

    this.clearState();
  }

  // Clear the state
  clearState() {
    this.isNew = true;
    this.id = '';
    this.text = '';
    this.date = '';
    this.logService.clearState();
  }
}
