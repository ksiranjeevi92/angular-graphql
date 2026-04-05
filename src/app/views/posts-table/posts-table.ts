import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Query } from '@angular/core';
import { environments } from '../../../environments/environments.development';
import { Apollo, gql } from 'apollo-angular';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const query = gql`
  #graphql
  query MyQuery {
    allPosts {
      id
      title
      views
    }
  }
`;

@Component({
  selector: 'app-posts-table',
  imports: [TableModule, ProgressSpinnerModule],
  templateUrl: './posts-table.html',
  styleUrl: './posts-table.scss',
})
export class PostsTable implements OnInit {
  posts: { id: string; title: string; views: number }[] = [];

  loading: boolean = true;

  constructor(
    private http: HttpClient,
    private apollo: Apollo,
  ) {}

  ngOnInit(): void {
    // this.getPosts().subscribe({
    //   next: (data) => {
    //     console.log('RES', data);
    //   },
    //   error: (err) => {
    //     console.error(err);
    //   },
    //   complete: () => {
    //     console.log('Complete');
    //   },
    // });
    this.apollo
      .watchQuery({
        query: query,
      })
      .valueChanges.subscribe((data: any) => {
        this.posts = [...data.data?.allPosts];
        this.loading = data.loading;
        console.log('D', data.data);
        console.log('E', data.error);
        console.log('L', data.loading);
      });
  }

  getPosts() {
    const body = {
      query: query,
    };

    return this.http.post<any>(environments.apiUrl, body);
  }
}
