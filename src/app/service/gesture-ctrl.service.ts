import { Injectable, NgZone } from "@angular/core";
import { GestureController, Platform, ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class GestureCtrlService {
  constructor(
    private gestureCtrl: GestureController,private toastController:ToastController

  ) {

  }

  useSwiperGesture(cardArray,moveOutWidth) {
    for (let i = 0; i < cardArray.length; i++) {
      const card = cardArray[i];
       console.log("card", card);

      const gesture = this.gestureCtrl.create({
        el: card.nativeElement,
        threshold: 15,
        gestureName: "swipte",
        onStart: (ev) => {
          console.log("Sev : ", ev);
        },
        
        onMove: (ev) => {
          let xMulti = ev.deltaX * 0.03;
          let yMulti = ev.deltaY / 80;
            let rotate = xMulti * yMulti;
            console.log("Mev : ", ev);
            card.nativeElement.style.transform = 'translate(' + ev.deltaX + 'px, ' + ev.deltaY + 'px) rotate(' + rotate + 'deg)';

          card.nativeElement.style.transform = 'translate(' + ev.deltaX + 'px, ' + ev.deltaY + 'px) rotate(' + rotate + 'deg)'
        },
        onEnd: (ev) => {
          // card.nativeElement.style.transition = ".5s ease-out";
          let endX = Math.max(Math.abs(ev.velocityX) * moveOutWidth, moveOutWidth);
            let toX = ev.deltaX > 0 ? endX : -endX;
           let endY = Math.abs(ev.velocityY) * moveOutWidth;
          let toY = ev.deltaY > 0 ? endY : -endY;
          let xMulti = ev.deltaX * 0.03;
         let yMulti = ev.deltaY / 80;
          let rotate = xMulti * yMulti;
          // //Right side Move
          if (ev.deltaX > 150) {
            console.log("Right");
            this.showToast('Not liked')
            card.nativeElement.style.transform='translate(' + toX + 'px, ' + (toY + ev.deltaY) + 'px) rotate(' + rotate + 'deg)'
           

          }
          // Left Side Move
          else if (ev.deltaX < -150) {
            this.showToast('Liked')
            console.log("Left");
            card.nativeElement.style.transform='translate(' + toX + 'px, ' + (toY + ev.deltaY) + 'px) rotate(' + rotate + 'deg)'
         
          }
          else if (ev.deltaY < 150) {
            this.showToast('Short Listed')
            console.log("Up");
            card.nativeElement.style.transform='translate(' + toX + 'px, ' + (toY + ev.deltaY) + 'px) rotate(' + rotate + 'deg)'
           
          }
          // When No move or if small move back to original
          else {
            card.nativeElement.style.transform = "";
          }
        },
      });
      gesture.enable(true);
    }
  }

  
  async showToast(message) {
    const toast = await this.toastController.create({
      message: message,
      position: 'top',
      duration: 100
    });
  
    //open toast
    toast.present();
  }
  // STYLE OF CARD WHEN GESTURE START
  setCardColor(x, element) {
    let color = "";
    const abs = Math.abs(x);
    const min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
    const hexCode = this.decimalToHex(min, 2);

    if (x < 0) {
      color = "#FF" + hexCode + "FF" + hexCode;
    } else {
      color = "#" + hexCode + "FF" + hexCode;
    }
    element.style.background = color;
  }

  decimalToHex(d, padding) {
    let hex = Number(d).toString(16);
    padding =
      typeof padding === "undefined" || padding === null
        ? (padding = 2)
        : padding;

    while (hex.length < padding) {
      hex = "0" + hex;
    }
    return hex;
  }
}

////////////////////////////////////////////////////////////////////////
/**
 *
 * USE THIS IN ANY TS FILE
 */
/* @ViewChildren(IonCard, { read: ElementRef }) cards: QueryList<ElementRef>;

  constructor(private gestureCtrlService: GestureCtrlService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const cardArray = this.cards.toArray();
    this.gestureCtrlService.useTinderSwipe(cardArray);
  } */
