import { Component } from '@angular/core';
import { ContactLinksComponent } from '../contact-links/contact-links.component';

@Component({
  selector: 'app-about-me',
  imports: [ContactLinksComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {}
