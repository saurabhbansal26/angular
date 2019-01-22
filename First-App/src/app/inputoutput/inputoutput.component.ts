import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-inputoutput',
  templateUrl: './inputoutput.component.html',
  styleUrls: ['./inputoutput.component.css']
})
export class InputoutputComponent implements OnInit {

@Input() public name: string;

@Output() public childEvent= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  public sendEmitwa(input: string){
    this.childEvent.emit(input+" Bansal");
  }

}
