import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-utility',
  templateUrl: './string-utility.component.html',
  styleUrls: ['./string-utility.component.css']
})
export class StringUtilityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  reverse(val:string):string{
    return val.split('').reverse().join('');
  }

  lowerCase(val:string):string{
    return val.toLowerCase();
  }

  
  upperCase(val:string):string{
    return val.toUpperCase();
  }
}
