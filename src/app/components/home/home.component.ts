import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { ClientComponent } from '../client/client.component';
import { AboutComponent } from '../about/about.component';
import { WhyUsComponent } from '../why-us/why-us.component';
import { ServiceComponent } from '../service/service.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { CallToComponent } from '../call-to/call-to.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SliderComponent,
    ClientComponent,
    AboutComponent,
    WhyUsComponent,
    ServiceComponent,
    PortfolioComponent,
    ContactComponent,
    CallToComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
