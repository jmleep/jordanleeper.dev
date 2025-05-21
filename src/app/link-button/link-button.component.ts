import { Component, input } from '@angular/core';

@Component({
  selector: 'app-link-button',
  imports: [],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.css',
})
export class LinkButtonComponent {
  href = input('');
  text = input('');
  dynamicClasses = input('');
}
