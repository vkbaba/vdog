import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint: string = 'https://dog.ceo/api'

  constructor(private http: HttpClient) { }

  GetDogs() {
    let API_URL = `${this.endpoint}/breeds/image/random/20`
    return this.http.get(API_URL);
    console.log(API_URL)
  }

  GetBreeds() {
    let API_URL = `${this.endpoint}/breeds/list/all`
    return this.http.get(API_URL);
  }

  GetDogByBreed(breed) {
    //Fetch less than 20 images
    let API_URL = `${this.endpoint}/breed/${breed}/images/random/20`
    return this.http.get(API_URL);
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }



}