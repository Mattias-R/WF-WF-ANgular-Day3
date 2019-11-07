import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
	xy(){
	 	alert("ndgjk");
	 }
	constructor() { 
	}

  ngOnInit() {

  }

} 
export class ToDoObject {
	name:string;
	deadline:string;
	goal:string;
	textarea:string;

	constructor(name,deadline,goal,textarea) { 
		this.name = name;
		this.deadline = deadline;
		this.goal = goal;
		this.textarea = textarea;
	}

}

