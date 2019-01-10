import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
   result = 0;
   studentList: string[] = ["Saurabh","Bansal","Neelesh","jaisawal"];
   customerList : Customer[] = [];
   headerList:string[] = ['Id','Name','City'];
   customerNameList:string[] = ['id','name','city']
  
  constructor() { }

  ngOnInit() {
    let customer1 = new Customer(1,'Saurabh Bansal', 'Bayana');
    let customer2 = new Customer(2,'Neelesh Jaisawal', 'Bhopal');
    let customer3 = new Customer(3,'Paras Jain', 'Delhi');

    this.customerList.push(customer1);
    this.customerList.push(customer2);
    this.customerList.push(customer3);
  }

  onAdd(num1, num2){
    this.result =parseInt(num1) + parseInt(num2);
  }

  onSubstract(num1, num2){
    this.result =parseInt(num1) - parseInt(num2);

  }

  onMultiplication(num1, num2){
    this.result =parseInt(num1) * parseInt(num2);
  }

  onDivision(num1, num2){
    this.result =parseInt(num1) / parseInt(num2);
  }
}
