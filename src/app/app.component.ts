import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

import { ContactLinksComponent } from './contact-links/contact-links.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';

@Component({
  selector: 'app-root',
  imports: [
    ContactLinksComponent,
    ProjectsComponent,
    AboutMeComponent,
    BlogPostsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChildren('cubes') cubes: QueryList<ElementRef> | undefined;

  title = 'jordan-leeper-dev';
  rotations = Array(15).fill(0);
  cubesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  ngAfterViewInit() {
    this.cubes?.forEach((cube, index) => {
      if (cube) {
        const initialRotation = index * 45; // 45 degrees between each cube
        cube.nativeElement.style.transform = `translateZ(-75px) rotateY(${initialRotation}deg) rotateX(${
          initialRotation * 0.5
        }deg)`;
      }
    });

    window.addEventListener('scroll', () => {
      this.cubes?.forEach((cube, index) => {
        if (cube) {
          this.rotations[index] = window.scrollY * (0.1 + index * 0.01);
          const initialRotation = index * 45;
          cube.nativeElement.style.transform = `translateZ(-75px) rotateY(${
            initialRotation + this.rotations[index]
          }deg) rotateX(${
            initialRotation * 0.5 + this.rotations[index] * 0.5
          }deg)`;
        }
      });
    });
  }
}
