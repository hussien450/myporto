import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onScroll()'
  },
  template: `
    <nav class="fixed top-0 left-0 w-full z-[100] bg-[rgba(8,12,16,0.8)] backdrop-blur-md border-b border-[var(--color-border-color)] py-4">
      <div class="container mx-auto px-8 flex justify-between items-center">
        <a href="#" class="font-display font-extrabold text-2xl text-[var(--color-accent)]">Al Hussein.</a>
        
        <button class="md:hidden bg-transparent border-none text-[var(--color-text-1)] cursor-pointer outline-none" (click)="toggleMenu()" aria-label="Menu">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            @if (menuOpen()) {
              <path d="M6 18L18 6M6 6l12 12" />
            } @else {
              <path d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>

        <ul class="hidden md:flex gap-8">
          @for (link of links; track link.href) {
            <li>
              <a [href]="link.href" 
                 class="font-body text-[0.95rem] font-medium transition-colors duration-300 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-full after:h-[2px] after:bg-[var(--color-accent)] after:transition-[right] after:duration-300 hover:text-[var(--color-accent)] hover:after:right-0"
                 [class.text-[var(--color-accent)]]="activeSection() === link.id"
                 [class.after:right-0]="activeSection() === link.id">
                {{ link.label }}
              </a>
            </li>
          }
        </ul>
      </div>

      <!-- Mobile Menu -->
      <div class="md:hidden absolute top-full left-0 w-full bg-[var(--color-bg-2)] border-b border-[var(--color-border-color)] flex-col py-4"
           [class.flex]="menuOpen()" [class.hidden]="!menuOpen()">
        @for (link of links; track link.href) {
          <a [href]="link.href" (click)="menuOpen.set(false)" class="px-8 py-4 w-full block font-body font-medium text-[var(--color-text-2)] hover:text-[var(--color-accent)] transition-colors">
            {{ link.label }}
          </a>
        }
      </div>
    </nav>
  `
})
export class Nav {
  menuOpen = signal(false);
  activeSection = signal('');

  links = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  onScroll(): void {
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id') || '';
      }
    });
    
    if (this.activeSection() !== current) {
      this.activeSection.set(current);
    }
  }
}
