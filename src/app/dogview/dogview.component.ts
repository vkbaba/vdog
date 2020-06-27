import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../shared/api.service';
import { DogImageService } from '../shared/dog-image.service';

@Component({
  selector: 'app-dogview',
  templateUrl: './dogview.component.html',
  styleUrls: ['./dogview.component.css']
})
export class DogviewComponent implements OnInit {
  constructor(public dogImageService: DogImageService) {
  }

  ngOnInit(): void {
  }

  doClick(event){
    this.dogImageService.imgaeIndex++;
    if (this.dogImageService.imgaeIndex == this.dogImageService.dogImages.length ){
      this.dogImageService.imgaeIndex = 0;
    }
  }
}
