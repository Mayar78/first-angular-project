import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  showPopup = false;
  popupImageSrc = ''; 

  openPopup(imageUrl: string) {
    this.popupImageSrc = imageUrl;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
 
}