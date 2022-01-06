import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit,ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataService) { }
  dataSource = [];
  dataDisplay = [];
  chunk = 5;

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any)=>{
      console.log(data);
      this.dataSource = data;
      this.dataDisplay = this.dataSource.slice(0,this.dataSource.length>this.chunk?this.chunk:this.dataSource.length)
    })  
  }

  loadMore() {  
    let currentSize = this.dataDisplay.length;
    this.dataDisplay = this.dataSource.slice(0,this.dataSource.length>currentSize+this.chunk?currentSize+this.chunk:this.dataSource.length)
  
  } 

}
