import { Component, ViewChild } from '@angular/core';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HackerNews';
  @ViewChild(NewsfeedComponent) newsFeedComp: NewsfeedComponent;
  searchKeyword: string;

  search() {
    this.newsFeedComp.searchArticles(this.searchKeyword);
  }
}
