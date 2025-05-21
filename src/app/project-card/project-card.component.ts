import { Component, computed, input } from '@angular/core';
import { LinkButtonComponent } from '../link-button/link-button.component';

@Component({
  selector: 'app-project-card',
  imports: [LinkButtonComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  title = input<string>();
  description = input('');
  tech = input<string[]>([]);
  cardImage = input<string | undefined>(undefined);
  demoUrl = input<string | undefined>(undefined);
  sourceUrl = input<string | undefined>(undefined);

  // Tech stack icons mapping
  techIcons = {
    Nuxt: 'https://nuxt.com/assets/design-kit/icon-green.svg',
    React: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
    Vue: 'https://vuejs.org/images/logo.png',
    Angular:
      'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif',
    Express: 'https://expressjs.com/images/favicon.png',
  };

  techIcon = computed(() => {
    return this.tech()
      .map((tech) => {
        const techLower = tech.toLowerCase();
        if (techLower.includes('nuxt')) return this.techIcons.Nuxt;
        if (techLower.includes('react')) return this.techIcons.React;
        if (techLower.includes('vue')) return this.techIcons.Vue;
        if (techLower.includes('angular')) return this.techIcons.Angular;
        if (techLower.includes('express')) return this.techIcons.Express;
        return '';
      })
      .filter(Boolean);
  });

  // Color mapping based on tech stack
  colorMap = {
    Nuxt: {
      border: 'border-[#00DC82]',
      primary: 'bg-[#00DC82] hover:bg-[#00DC82]/90 text-white',
      secondary: 'bg-[#00DC82]/10 hover:bg-[#00DC82]/20 text-[#00DC82]',
    },
    React: {
      border: 'border-[#61DAFB]',
      primary: 'bg-[#61DAFB] hover:bg-[#61DAFB]/90 text-[#282C34]',
      secondary: 'bg-[#61DAFB]/10 hover:bg-[#61DAFB]/20 text-[#61DAFB]',
    },
    Vue: {
      border: 'border-[#41B883]',
      primary: 'bg-[#41B883] hover:bg-[#41B883]/90 text-white',
      secondary: 'bg-[#41B883]/10 hover:bg-[#41B883]/20 text-[#41B883]',
    },
    Angular: {
      border: 'border-[#E91E63]',
      primary: 'bg-[#E91E63] hover:bg-[#E91E63]/90 text-white',
      secondary: 'bg-[#E91E63]/10 hover:bg-[#E91E63]/20 text-[#E91E63]',
    },
    Express: {
      border: 'border-[#000000]',
      primary: 'bg-[#000000] hover:bg-[#000000]/90 text-white',
      secondary: 'bg-[#000000]/10 hover:bg-[#000000]/20 text-[#000000]',
    },
    default: {
      border: 'border-primary',
      primary: 'bg-primary hover:bg-primary/90 text-primary-foreground',
      secondary: 'bg-secondary hover:bg-secondary/80 text-secondary-foreground',
    },
  };

  // Determine which color scheme to use based on tech stack
  colorScheme = computed(() => {
    const tech = this.tech()[0].toLowerCase();
    if (tech.includes('nuxt')) return this.colorMap.Nuxt;
    if (tech.includes('react')) return this.colorMap.React;
    if (tech.includes('vue')) return this.colorMap.Vue;
    if (tech.includes('angular')) return this.colorMap.Angular;
    if (tech.includes('express')) return this.colorMap.Express;
    return this.colorMap.default;
  });

  cardClasses = computed(() => `h-100 border-2 ${this.colorScheme().border}`);

  primaryButtonClasses = computed(() => this.colorScheme().primary);

  secondaryButtonClasses = computed(
    () =>
      `p-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
        this.colorScheme().secondary
      }`
  );
}
