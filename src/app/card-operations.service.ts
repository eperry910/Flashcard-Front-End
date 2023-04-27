import { Injectable } from '@angular/core';
import { Flashcard } from './flashcard';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardOperationsService {
  apiRoot: string = "https://flashcardclp.azurewebsites.net"
  constructor(private http: HttpClient) { }
  public getAllCards(): Observable<Array<Flashcard>> {
    return this.http.get(this.apiRoot + '/Flashcard') as Observable<Array<Flashcard>>
  }
  public updateCard(cardToUpdate: Flashcard): Observable<void> {
    return this.http.put(this.apiRoot + '/Flashcard/UpdateCard', cardToUpdate) as unknown as Observable<void>
  }
  public deleteCard(cardToDelete: Flashcard): Observable<void> {
    return this.http.delete(this.apiRoot + '/Flashcard/DeleteCards', { body: cardToDelete }) as unknown as Observable<void>
  }
  public createCard(cardToCreate: Flashcard): Observable<void> {
    return this.http.post(this.apiRoot + '/Flashcard/CreateCards', cardToCreate) as unknown as Observable<void>

  }
}
