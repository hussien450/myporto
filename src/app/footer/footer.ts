import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="text-center border-t border-[var(--color-border-color)] p-8 mt-16">
      <div class="container mx-auto">
        <p class="text-[var(--color-text-2)] text-[0.875rem] mb-2">Built with passion by Al Hussein Elassy · Full-Stack MEARN Developer</p>
        <p class="text-[var(--color-text-2)] text-[0.875rem]">Gharbia, Egypt — Open to Cairo & Remote Opportunities</p>
      </div>
    </footer>
  `
})
export class Footer {}
