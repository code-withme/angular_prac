import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
 
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
  posts:Post[];
  isEdit: boolean = false;
  constructor(private dataservice:DataService) { 
    console.log("Constructor ran");
  }

  ngOnInit() {
    console.log("ngOnInit Ran...");
    this.email = 'Johndoe@example.com'
    this.name="John Doe"
    this.age = 30;
    this.address = { 
      street:"50 main street",
      city: "Boston",
      state:"MA"
    },
    this.hobbies = ["code" , "movies" , "music"]
    this.dataservice.getPosts().subscribe((posts)=>{
     // console.log(posts);
     this.posts = posts;

    })
  }
  onCLick() {
    this.name = 'Nakul';
   }
  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby){
    for(let i=0;i<this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    } 
  }
  toggleEdit(){
    this.isEdit = !this.isEdit;
    
  }
}
interface Address{
  street: string,
  city: string,
  state: string
}
interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}