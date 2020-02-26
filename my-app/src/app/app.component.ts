import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Jungle';
  hideTitle = true;

  todos = [
    {
      completed: true,
      task: 'fold clothes'
    },
    {
      completed: true,
      task: 'put clothes in dresser'
    },
    {
      completed: true,
      task: 'relax'
    },
    {
      completed: false,
      task: 'try to pet cat'
    },
    {
      completed: true,
      task: 'pet dog'
    },
    {
      completed: true,
      task: 'be awesome'
    },
  ]

}
