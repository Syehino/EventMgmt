import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: `./profile.component.html`,
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {

  user:any = {
    name: 'Azwan Ali',
    image: 'https://cdn.beautifulnara.net/wp-content/uploads/2020/01/15154604/azwan-ali-1.jpg',
    phone: '0123456789',
    email: 'azwanali@gmail.com',
  };

  constructor() { }

  ngOnInit() {}

}