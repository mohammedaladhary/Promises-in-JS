import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  firstName: string;
  lastName: string;
  course: string;
  message: string;
  button: string;
  
  constructor() {
    this.firstName = "John";
    this.lastName = "Doe";
    this.course = "Math";
    this.message = "Enter your value";
    this.button = "Submit";
  }
 
  sayHello(): void {
    alert(`Hello ${this.firstName} ${this.lastName}`);
  }
  isName(): boolean{
    return this.firstName === "Mohammed"
  }
}
