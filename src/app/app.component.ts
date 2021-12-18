import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { StorageServiceService } from './service/storage-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
 
  
  constructor(private router:Router,private platform:Platform,private storageServiceservice:StorageServiceService) {

  }  

  ngOnInit(){
  this.initialize()
  }

  initialize(){

    this.platform.ready().then(() => {
      fetch("../../assets/json/Data.json").then(res=>res.json()).then(json=>{
        console.log("OUTPUT: ", json);
        this.storageServiceservice.setStorage('Data',json)
        this.router.navigate(['home'])
        //DO YOUR STAFF
    });
    });

  }
}
