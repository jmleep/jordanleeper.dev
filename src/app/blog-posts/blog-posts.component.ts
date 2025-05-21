import { Component } from '@angular/core';
import { LinkComponent } from '../link/link.component';
import { LinkButtonComponent } from '../link-button/link-button.component';

@Component({
  selector: 'app-blog-posts',
  imports: [LinkButtonComponent],
  templateUrl: './blog-posts.component.html',
  styleUrl: './blog-posts.component.css',
})
export class BlogPostsComponent {
  posts = [
    {
      title: 'The Rendering Equation: Client + Server + Framework',
      description:
        'A deep dive into client-side rendering, server-side rendering, and how modern frameworks handle both approaches.',
      date: 'March 2024',
      url: 'https://medium.com/state-farm-engineering-blog/the-rendering-equation-client-server-framework-aca0018832b6',
    },
  ];
}
