import { Component, OnInit } from '@angular/core';
import { ApiService } from './../shared/api.service';
import { DogImageService } from '../shared/dog-image.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  breedList: String[];

  constructor(private dogApi: ApiService, 
              public dogImageService: DogImageService) {
    this.dogApi.GetDogs().subscribe(data => {
      let obj: any = [];
      obj = data;
      //Initial images are selected from all.
      this.dogImageService.dogImages = obj.message;
    })
    this.dogApi.GetBreeds().subscribe(data => {
      let obj: any = [];
      obj = data;
      this.breedList = Object.keys(obj.message); 
      
    }) 
  }
   
  ngOnInit(): void {
  }
  doSelect(selectedBreed){
    this.dogImageService.breed = selectedBreed;
    this.dogImageService.imgaeIndex = 0;
    if (this.dogImageService.breed == "All" ){
      let obj: any = [];
      this.dogApi.GetDogs().subscribe(data => {
        obj = data;
        this.dogImageService.dogImages = obj.message;
      })
    } else {
      let obj: any = [];
      this.dogApi.GetDogByBreed(selectedBreed).subscribe(data => {
        obj = data;
        this.dogImageService.dogImages = obj.message;
        console.log(obj.message);
      })
    }
  }
}
