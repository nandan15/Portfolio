import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      state('out', style({
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      transition('in => out', animate('400ms ease-out')),
      transition('out => in', animate('400ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {
  isLoading = true;
  typedText: string = '';
  animationState: string = 'initial';

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
      this.startTextAnimation(0);
      this.startBounceAnimation();
    }, 3000); 
  }

  typeWriter(text: string, i: number, fnCallback: () => void) {
    if (i < text.length) {
      this.typedText = `<span class="typed-text">${text.substring(0, i + 1)}</span><span aria-hidden="true"></span>`;
      setTimeout(() => {
        this.typeWriter(text, i + 1, fnCallback);
      }, 100);
    } else if (typeof fnCallback === 'function') {
      setTimeout(fnCallback, 700);
    }
  }

  startTextAnimation(i: number) {
    const dataText: string[] = ["I'M A SOFTWARE DEVELOPMENT ENGINEER."];
    if (typeof dataText[i] === 'undefined') {
      setTimeout(() => {
        this.startTextAnimation(0);
      }, 20000);
    }

    if (i < dataText.length) {
      this.typeWriter(dataText[i], 0, () => {
        this.startTextAnimation(i + 1);
      });
    }
  }

  startBounceAnimation() {
    this.animationState = 'final';
  }
}
