import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogImageService {
  dogImages: any = [];
  breed: String;
  imgaeIndex: number;
  constructor() { 
    this.dogImages = "";
    this.breed = "All";
    this.imgaeIndex = 0;
  }
}
