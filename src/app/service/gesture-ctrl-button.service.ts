import { Injectable, NgZone } from '@angular/core';
import { GestureController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GestureCtrlButtonService {
  constructor(
    private gestureCtrl: GestureController,
    private zone: NgZone,
    private platform: Platform
  ) {

  }

  useSwiperClick(cardArray,type) {
  console.log('Click',type);
  
    for (let i = 0; i < cardArray.length; i++) {
      const card = cardArray[i];
       console.log("card", card);

      const gesture = this.gestureCtrl.create({
        el: card.nativeElement,
       // threshold: 15,
        gestureName: "long-press",
        onStart: (ev) => {
          console.log("Sev : ", ev);
        },
        onEnd: (ev) => {
          // card.nativeElement.style.transition = ".5s ease-out";

          // //Right side Move
          if (type=='Yes') {
            console.log("Right");
            // card.nativeElement.style.transform = `translateX(${
            //   +this.platform.width() * 2
            // }px) rotate(${ev.deltaX / 3}deg)`;
            
          }
          // Left Side Move
          else if (type=='No') {
            console.log("Left");
            // card.nativeElement.style.transform = `translateX(-${
            //   +this.platform.width() * 2
            // }px) rotate(${ev.deltaX / 3}deg)`;
          }
          else if (type=='ShortList') {
            console.log("Up");
            // card.nativeElement.style.transform = `translateY(-${
            //   +this.platform.height() * 2
            // }px) rotate(${ev.deltaY / 3}deg)`;
          }
          // else {
          //   card.nativeElement.style.transform = "";
          // }
        },
      });
      gesture.enable(true);
    }
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