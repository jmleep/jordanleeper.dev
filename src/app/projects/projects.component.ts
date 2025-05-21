import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';

interface Project {
  title: string;
  description: string;
  tech: string[];
  cardImage?: string;
  demoUrl?: string;
  sourceUrl?: string;
}

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'SPA Framework Wizard',
      description:
        'A wizard application that helps developers choose the right Single Page Application framework based on their needs and experience.',
      tech: ['Angular'],
      cardImage: '/spa-framework-wizard.png',
      demoUrl: 'https://spa-framework-wizard.web.app',
      sourceUrl: 'https://github.com/jmleep/spa-framework-wizard',
    },
    {
      title: 'LocalBirdTracker',
      description:
        'A website that allows users to query recent bird sightings based on their current latitude and longitude (US only).',
      tech: ['Vue'],
      cardImage: '/localbirdtracker.png',
      demoUrl: 'https://www.localbirdtracker.com',
      sourceUrl: 'https://github.com/jmleep/LocalBirdTracker',
    },
    {
      title: 'CocktailGenie',
      description:
        'A web application that uses the free cocktail API to help you find new drink recipes.',
      tech: ['Angular'],
      cardImage: '/cocktailgenie.png',
      demoUrl: 'https://cocktail-genie-1804c.web.app',
      sourceUrl: 'https://github.com/jmleep/cocktails',
    },
    {
      title: 'Dev Logo Colorizer',
      description:
        'A web application that allows developers to customize and download colored versions of popular development framework logos.',
      tech: ['Nuxt'],
      cardImage: '/dev-logo-colorizer.png',
      demoUrl: 'https://dev-logo-colorizer.nuxt.dev',
      sourceUrl: 'https://github.com/jmleep/dev-logo-colorizer',
    },
    {
      title: 'Site Parser',
      description:
        'A web application that allows users to enter a URL and view information about the site, including images and word frequency analysis.',
      tech: ['React', 'Express'],
      sourceUrl: 'https://github.com/jmleep/SiteParser',
    },
  ];
}
