import { Component, ElementRef,Directive } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { StorageServiceService } from '../service/storage-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
@Directive({
  selector: '.innerHolder'
})
export class HomePage {
  STYLE_INITIAL = "initial";
cards:any=[];
myMatchClass: string = 'innerHolder';
private el: ElementRef;
holder ='holder1';
profilePending:any;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.3
  }
     
  constructor(private router:Router,private storageServiceservice:StorageServiceService) {
    
  }

  ngOnInit() {
 
    this.storageServiceservice.getStorage('Data').then(res=>{
      //console.log(res);
    
        this.cards = JSON.parse(res)
        this.profilePending = this.cards.Data.length;
        console.log(this.cards);
        })  
  }
  
  gotoProfile(i){
    console.log('log',i);
    let navigationExtras: NavigationExtras = {
      state: {
       profile :this.cards.Data[i],
       image: this.cards.Data
      }
    };
    this.router.navigate(['home/profile'],navigationExtras)
  }
  gotoRecommendations(){
    let navigationExtras: NavigationExtras = {
      state: {
       data: this.cards.Data
      }
    };
    this.router.navigate(['home/swipe-profile'],navigationExtras)
  }
}