import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreedService {
  breed: String;
  constructor() {
    this.breed = "All";
   }
}
