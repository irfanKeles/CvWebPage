import { Component, inject, NgModule } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AboutDetailComponent } from './about-detail/about-detail.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(
    private modalService: NgbModal
  ) { }

  openAboutDetail() {
    const modalRef = this.modalService.open(AboutDetailComponent, {
      fullscreen: true,
      scrollable:true,
    });
  }
}
