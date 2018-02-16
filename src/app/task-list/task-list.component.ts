import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks = [];
  task: Task = {
    nome: '',
    valor: 0
  };
  constructor() { }

  ngOnInit() {
  }

  add() {
    this.tasks.push(this.task);
  }

}
