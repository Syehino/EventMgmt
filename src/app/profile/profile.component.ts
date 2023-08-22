import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: `./profile.component.html`,
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {

  user:any = {
    name: 'Azwan Ali',
    image: 'https://dudeproducts.com/cdn/shop/articles/gigachad_1024x1024.jpg?v=1667928905',
    phone: '0123456789',
    email: 'azwanali@gmail.com',
  };

  constructor() { }

  ngOnInit() {}

}