import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent implements OnInit {
  idList:number[] = [1,2,3,4];
  nameList:string[] = ['Saurabh','Riya','Neelesh','Divya'];
  noList:number[] = [20,30,20,29];
  constructor() { }
  bindField:string = '';
  ngOnInit() {
  }

}
