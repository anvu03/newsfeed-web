import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedComponent } from './newsfeed.component';
import { HttpClient } from '@angular/common/http';

describe('NewsfeedComponent', () => {
  let component: NewsfeedComponent;
  let fixture: ComponentFixture<NewsfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsfeedComponent, HttpClient],
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

  it('articles should be defined', () => {
    expect(component.latestsArticles).toBeDefined();
  });

  it('articles should be empty', () => {
    expect(component.latestsArticles.length).toEqual(0);
  });
});
