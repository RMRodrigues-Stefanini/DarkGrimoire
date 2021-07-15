import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Card } from './user.models';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getById(id: string) {
    return this.httpClient.get<Card>(`${environment.api}/card/${id}`);
   }


  delete(id: string) {
    return this.httpClient.delete<Card>(`${environment.api}/card/${id}`);
  }

  save(card: Card) {
    if (card.id) {
      return this.httpClient.put<Card>(`${environment.api}/card/${card.id}`, card);
    } else {
      return this.httpClient.post<Card>(`${environment.api}/card`, card);
    }
  }
}
