
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  texts = ['Web Developer', 'Freelancer', 'UI/UX Desinger'];
  displayText = '';
  currentTextIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typingSpeed = 150;
  pauseBetweenTexts = 1000;

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit(): void {
    // Sadece tarayıcıda animasyonu başlat
    if (isPlatformBrowser(this.platformId)) {
      this.typingEffect();
    }
  }

  typingEffect() {
    const currentText = this.texts[this.currentTextIndex];

    if (!this.isDeleting && this.charIndex < currentText.length) {
      this.displayText += currentText.charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => this.typingEffect(), this.typingSpeed);
    } else if (this.isDeleting && this.charIndex > 0) {
      this.displayText = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(() => this.typingEffect(), this.typingSpeed / 2);
    } else if (!this.isDeleting && this.charIndex === currentText.length) {
      setTimeout(() => {
        this.isDeleting = true;
        this.typingEffect();
      }, this.pauseBetweenTexts);
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
      setTimeout(() => this.typingEffect(), this.typingSpeed);
    }
  }
}
