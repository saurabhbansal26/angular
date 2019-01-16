import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-output',
  templateUrl: './component-output.component.html',
  styleUrls: ['./component-output.component.css']
})
export class ComponentOutputComponent implements OnInit {

  @Input()
  message:string;

  @Output()
  getFormattedMessage = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.getFormattedMessage.emit(this.message+"  World");
  }

 

}
