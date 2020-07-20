import { Component, OnInit, HostListener } from '@angular/core';
import { NewsfeedService } from '../newsfeed.service';
import { Article } from '../../domain/article';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css'],
})
export class NewsfeedComponent implements OnInit {
  articles: Array<Article>;
  loading = false;
  searchModeOn = false;

  constructor(private newsfeedService: NewsfeedService) {}

  ngOnInit(): void {
    this.loading = true;
    this.newsfeedService.getLatestArticles(20).subscribe((articles) => {
      this.articles = articles;
      this.loading = false;
    });
  }

  searchArticles(searchKeyword: string) {
    this.searchModeOn = true;
    this.newsfeedService.searchArticles(searchKeyword).subscribe((articles) => {
      this.articles = articles;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.searchModeOn == true) return;
    //In chrome and some browser scroll is given to body tag
    let pos =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if (pos == max && this.loading == false) {
      this.loading = true;
      this.newsfeedService
        .getLatestArticles(20, this.articles[this.articles.length - 1].id)
        .subscribe((articles) => {
          this.articles = this.articles.concat(articles);
          this.loading = false;
        });
    }
  }

  getTimeSpanFromUnixTimestamp(unixTimestamp: number) {
    var date = new Date(unixTimestamp * 1000);
    var diff = (new Date().valueOf() - date.valueOf()) / 1000;

    switch (true) {
      case diff < 60 * 60:
        return `${Math.ceil(diff / 60)} minutes ago`;
      case diff < 60 * 60 * 24:
        return `${Math.ceil(diff / 3600)} hours ago`;
      case diff > 3600 * 24:
        return `${Math.ceil(diff / (3600 * 24))} days ago`;
      default:
        break;
    }
    return diff;
  }
}
