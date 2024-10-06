import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-about-detail',
  standalone: true,
  imports: [],
  templateUrl: './about-detail.component.html',
  styleUrl: './about-detail.component.scss',
})
export class AboutDetailComponent {
  activeModal = inject(NgbActiveModal);
}
