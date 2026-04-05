import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsTable } from './views/posts-table/posts-table';

@Component({
  selector: 'app-root',
  imports: [PostsTable],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-graphql');
}
