import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { User } from './user.models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getById(id: string) {
   return this.httpClient.get<User>(`${environment.api}/users/${id}`);
  }


  delete (id: string) {
    return this.httpClient.delete<User>(`${environment.api}/users/${id}`);
  }

  save (user: User) {
    if (user.id) {
      return this.httpClient.put<User>(`${environment.api}/users/${user.id}`, user);
    } else {
      return this.httpClient.post<User>(`${environment.api}/users`, user);
    }
  }
}
