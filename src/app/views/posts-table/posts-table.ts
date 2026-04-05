import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Query } from '@angular/core';
import { environments } from '../../../environments/environments.development';

const query = `#graphql
 query MyQuery{
  allPosts{
    id,
    title,
    views
  }
 }
`;

@Component({
  selector: 'app-posts-table',
  imports: [],
  templateUrl: './posts-table.html',
  styleUrl: './posts-table.scss',
})
export class PostsTable implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPosts().subscribe({
      next: (data) => {
        console.log('RES', data);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('Complete');
      },
    });
  }

  getPosts() {
    const body = {
      query: query,
    };

    return this.http.post<any>(environments.apiUrl, body);
  }
}
