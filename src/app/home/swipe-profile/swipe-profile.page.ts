import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard, ToastController } from '@ionic/angular';
import { GestureCtrlButtonService } from 'src/app/service/gesture-ctrl-button.service';
import { GestureCtrlService } from 'src/app/service/gesture-ctrl.service';

@Component({
  selector: 'app-swipe-profile',
  templateUrl: './swipe-profile.page.html',
  styleUrls: ['./swipe-profile.page.scss'],
})
export class SwipeProfilePage implements OnInit {
  @ViewChildren(IonCard, { read: ElementRef }) cards: QueryList<ElementRef>;
 CardsArray: Array<ElementRef>;
 isButtonPress:boolean = false;
 routerParams: any;
 dataArray:any;
 moveOutWidth:number
  constructor(private gestureCtrlService: GestureCtrlService, 
    private toastController: ToastController,private renderer: Renderer2,private router: Router) { }

  ngOnInit() {
    this.routerParams = this.router.getCurrentNavigation().extras.state;
    console.log(this.routerParams);
    this.dataArray =  this.routerParams.data
    console.log(this.dataArray);
  }

  
  ngAfterViewInit() {
    this.moveOutWidth = document.documentElement.clientWidth * 1.5;
    this.CardsArray = this.cards.toArray();
   
    this.cards.changes.subscribe(()=>{
      this.CardsArray = this.cards.toArray();
    })
    if(!this.isButtonPress){
      this.gestureCtrlService.useSwiperGesture(this.CardsArray,this.moveOutWidth);
    }
   
   
   }

  userClickedButton(event, type,i) {
    event.preventDefault();
    //const cardArray = this.cards1.toArray();
    console.log(this.CardsArray[0]);
    
    if (!this.dataArray.length) return false;

    if (type=='No') {
      this.showToast('Not Liked')
      this.renderer.setStyle(this.CardsArray[i].nativeElement, 'transform', 'translate(' + this.moveOutWidth + 'px, -100px) rotate(-30deg)')
   } 
    else if(type=='Yes'){
      this.showToast('Liked')
      this.renderer.setStyle(this.CardsArray[i].nativeElement, 'transform', 'translate(-' + this.moveOutWidth + 'px, -100px) rotate(30deg)')
    }
   else {
    this.showToast('Short Listed Profile')
      this.renderer.setStyle(this.CardsArray[i].nativeElement, 'transform', 'translate('+ this.moveOutWidth + 'px, -100px) rotate(30deg)')
     
   };
 
  };

  async showToast(message) {
    const toast = await this.toastController.create({
      message: message,
      position: 'top',
      duration: 100
    });
  
    //open toast
    toast.present();
  }
}



