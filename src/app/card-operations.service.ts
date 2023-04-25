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
}
