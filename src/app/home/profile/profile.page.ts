import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  routerParams: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.routerParams = this.router.getCurrentNavigation().extras.state;
    console.log(this.routerParams);
    
  }

}
