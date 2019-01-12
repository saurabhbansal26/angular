import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-drop-down',
  templateUrl: './my-drop-down.component.html',
  styleUrls: ['./my-drop-down.component.css']
})
export class MyDropDownComponent implements OnInit {
  dropDownList:string[] = ['Pune','Mumbai','Delhi'];

  @Input()
  placeHolder:string;

  @Input()
  studentDropDownData:any[];
  constructor() { }

  ngOnInit() {
  }

}
