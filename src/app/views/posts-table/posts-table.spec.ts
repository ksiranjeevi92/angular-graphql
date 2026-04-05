import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsTable } from './posts-table';

describe('PostsTable', () => {
  let component: PostsTable;
  let fixture: ComponentFixture<PostsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
