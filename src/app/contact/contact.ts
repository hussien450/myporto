import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact" class="section container mx-auto px-8 py-24">
      <div class="reveal">
        <span class="section-label">Let's Connect</span>
        <h2 class="section-title">Contact Me</h2>
        <div class="accent-line"></div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 reveal">
        <div class="flex flex-col gap-4">
          @for (item of contactItems; track item.label) {
            <a [href]="item.href" [target]="item.target" rel="noopener noreferrer" class="bg-[var(--color-bg-3)] border border-[var(--color-border-color)] rounded-xl p-6 flex items-center gap-4 transition-colors hover:border-[var(--color-accent)]">
              <div class="w-10 h-10 rounded-full bg-[rgba(0,229,160,0.1)] text-[var(--color-accent)] flex items-center justify-center shrink-0" [innerHTML]="item.svg"></div>
              <div>
                <h4 class="text-[0.875rem] text-[var(--color-text-3)] mb-1">{{ item.label }}</h4>
                <p class="text-[var(--color-text-1)] font-medium">{{ item.value }}</p>
              </div>
            </a>
          }
        </div>
        
        <div class="bg-[var(--color-bg-3)] border border-[var(--color-border-color)] rounded-xl p-8">
          <form (submit)="$event.preventDefault()">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <input type="text" class="w-full bg-[var(--color-bg-4)] border border-[var(--color-border-color)] text-[var(--color-text-1)] px-4 py-3 rounded-lg font-body transition-all focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[rgba(0,229,160,0.2)]" placeholder="Your Name" required>
              </div>
              <div>
                <input type="email" class="w-full bg-[var(--color-bg-4)] border border-[var(--color-border-color)] text-[var(--color-text-1)] px-4 py-3 rounded-lg font-body transition-all focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[rgba(0,229,160,0.2)]" placeholder="Your Email" required>
              </div>
            </div>
            <div class="mb-6">
              <input type="text" class="w-full bg-[var(--color-bg-4)] border border-[var(--color-border-color)] text-[var(--color-text-1)] px-4 py-3 rounded-lg font-body transition-all focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[rgba(0,229,160,0.2)]" placeholder="Subject" required>
            </div>
            <div class="mb-6">
              <textarea class="w-full bg-[var(--color-bg-4)] border border-[var(--color-border-color)] text-[var(--color-text-1)] px-4 py-3 rounded-lg font-body transition-all focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[rgba(0,229,160,0.2)] resize-y" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-full">
              Send Message
              <svg viewBox="0 0 24 24" class="w-[18px] h-[18px] ml-2 stroke-current fill-none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  `
})
export class Contact {
  contactItems = [
    { label: 'Email', value: 'Hussienelassy040@gmail.com', href: 'mailto:Hussienelassy040@gmail.com', target: '_self', svg: '<svg viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 4v12h16V8l-8 5-8-5zm8 3l8-5H4l8 5z"/></svg>' },
    { label: 'Phone', value: '+20 1055596700', href: 'tel:+201055596700', target: '_self', svg: '<svg viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>' },
    { label: 'Location', value: 'Gharbia, Egypt (Ready to relocate to Cairo)', href: '#', target: '_self', svg: '<svg viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>' },
    { label: 'LinkedIn', value: 'hussein-elassy', href: 'https://linkedin.com/in/hussein-elassy', target: '_blank', svg: '<svg viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>' },
    { label: 'GitHub', value: 'hussein450', href:'https://github.com/hussien450', target: '_blank', svg: '<svg viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>' }
  ];
}
