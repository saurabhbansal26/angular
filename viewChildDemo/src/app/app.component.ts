import { Component, ViewChild, ElementRef } from '@angular/core';
import { StringUtilityComponent } from './string-utility/string-utility.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viewChildDemo';

  result:string;

  @ViewChild(StringUtilityComponent)
  stringUtil : StringUtilityComponent;

  @ViewChild("name")
  name:ElementRef;

  reverse(){
     this.result =  this.stringUtil.reverse(this.name.nativeElement.value);
  }
  
  lowerCase(){
    this.result =  this.stringUtil.lowerCase(this.name.nativeElement.value);
 }

 upperCase(){
  this.result =  this.stringUtil.upperCase(this.name.nativeElement.value);
}

}
