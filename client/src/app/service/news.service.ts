import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {News} from '../model/news';

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) {}

  private url = `http://127.0.0.1:8080/item`;

  saveNews(news: News) {
    return this.http.post(`${this.url}/news`, news);
  }

}
