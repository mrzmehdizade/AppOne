import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts=[
    {
      title: "tree",
      imageUrl:'assets/images/tree.jpeg',
      userName:'nature',
      content:'i saw neat tree'

    },
    {
      title: "mountain",
      imageUrl:'assets/images/mountain.jpeg',
      userName:'mountain',
      content:'i saw neat mountain'

    },
    {
      title: "biking",
      imageUrl:'assets/images/biking.jpeg',
      userName:'biking',
      content:'i saw neat biking'

    },

  ]


}
