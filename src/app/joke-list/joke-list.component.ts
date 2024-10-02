import { Component } from '@angular/core';
import { Joke } from '../joke';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'joke-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joke-list.component.html',
  styleUrl: './joke-list.component.css'
})
export class JokeListComponent {
  
  jokearray: Array<Joke>;

  constructor(){
    this.jokearray= new Array<Joke>(new Joke("texto","punchline"));
  }
}
