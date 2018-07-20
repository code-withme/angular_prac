import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  constructor() { 
    console.log("Constructor ran");
  }

  ngOnInit() {
    console.log("ngOnInit Ran...");
    this.name="John Doe"
    this.age = 30;
    this.address = {
      street:"50 main street",
      city: "Boston",
      state:"MA"
    },
    this.hobbies = ["code" , "movies" , "music"]
  }

}
interface Address{
  street: string,
  city: string,
  state: string
}