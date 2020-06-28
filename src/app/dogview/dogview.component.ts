import { Component, OnInit } from '@angular/core';
import { ApiService } from './../shared/api.service';
import { DogImageService } from '../shared/dog-image.service';

@Component({
  selector: 'app-dogview',
  templateUrl: './dogview.component.html',
  styleUrls: ['./dogview.component.css']
})
export class DogviewComponent implements OnInit {
  constructor(private dogApi: ApiService,
              public dogImageService: DogImageService) {
  }

  ngOnInit(): void {
  }

  doClick(event){
    if (this.dogImageService.judasMode == false){
      this.dogImageService.imgaeIndex++;
      if (this.dogImageService.imgaeIndex == this.dogImageService.dogImages.length ){
        this.dogImageService.imgaeIndex = 0;
      }
    } else {
      this.dogApi.GetCat().subscribe(data => {
        let obj: any = [];
        obj = data;
        this.dogImageService.dogImages[0] = obj[0].url;
        this.dogImageService.imgaeIndex = 0;
      })
    }
  }
}
