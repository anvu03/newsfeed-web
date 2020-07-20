import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedComponent } from './newsfeed.component';
import { NewsfeedService } from '../newsfeed.service';
import { Article } from '../../domain/article';
import { Observable } from 'rxjs';

describe('NewsfeedComponent', () => {
  let component: NewsfeedComponent;
  let fixture: ComponentFixture<NewsfeedComponent>;

  let newsfeedServiceStub: Partial<NewsfeedService>;
  newsfeedServiceStub = {
    getLatestArticles(count: number = 0, lastArticleId: number = 0) {
      let resolve = new Array<Article>();
      return new Observable((observer) => {});
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsfeedComponent],
      providers: [{ provide: NewsfeedService, useValue: newsfeedServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
