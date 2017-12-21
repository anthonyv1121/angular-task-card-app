import { Component } from '@angular/core';
import { Task } from './model/task';
import { log } from 'core-js/library/web/timers';

@Component({
    moduleId: module.id, // without this angular will look for template files @ the root level
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent { 
   private tasks: Task[] = [];
   private myArray: Object[] = [];
   private currentTask = new Task(null, false);
   
   addTask(){
       let task = new Task(this.currentTask.content, this.currentTask.completed);
       this.tasks.push(task);
       this.currentTask.content = null;
       //console.log(this.myArray);
       
   }
   removeTask(task){ 
    this.tasks.splice( this.tasks.indexOf(task), 1 );
    console.log("TASKS ARRAY ", this.tasks); 
}
}