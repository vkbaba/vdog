import { Component, OnInit } from '@angular/core';
import { ApiService } from './../shared/api.service';

@Component({
  selector: 'app-dogview',
  templateUrl: './dogview.component.html',
  styleUrls: ['./dogview.component.css']
})
export class DogviewComponent implements OnInit {
  dogList: any = [];
  dog: String;
  i: number = 0;

  constructor(private dogApi: ApiService) {
    this.dogApi.GetDogs().subscribe(data => {
      this.dogList = data;
      this.dog = this.dogList.message[0];
    })
  }

  ngOnInit(): void {
  }

  doClick(event){
    this.i++;
    if (this.i == this.dogList.message.length - 1){
      this.i = 0;
    }
    this.dog = this.dogList.message[this.i];
  }
}
