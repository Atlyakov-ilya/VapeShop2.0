import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UploadFileService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File, fileName: string): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file, fileName);

    const req = new HttpRequest('POST', 'http://127.0.0.1:8080/file', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
}
