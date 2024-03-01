import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angualrclass';
}


// var arra=[1, 2, 3, 4];
// var arr =["richa" , "amsn" , "rohit"] 
// array of string 
// array of objects 
// var array =[
//     {
//       car : "odi" , 
//       color:"red",
//     },
//     {
      
//     }
// ]