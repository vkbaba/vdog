import { Component, OnInit } from '@angular/core';
import { ApiService } from './../shared/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  breedList: any = [];
  sss: String[];
  constructor(private dogApi: ApiService) {
    this.dogApi.GetBreeds().subscribe(data => {
      this.breedList = data;
      let obj = JSON.parse(this.breedList);
      console.log(obj)
    }) 
  }
   
  ngOnInit(): void {
  }

}


