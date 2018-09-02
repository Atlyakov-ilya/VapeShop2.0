import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  private url = `http://127.0.0.1:8080/user`;

  registrationNewUser(user: User) {
    return this.http.post(`${this.url}/`, user);
  }

}
