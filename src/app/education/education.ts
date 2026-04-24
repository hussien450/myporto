import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-education',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="education" class="section container mx-auto px-8 py-24">
      <div class="reveal">
        <span class="section-label">Academic Background</span>
        <h2 class="section-title">Education</h2>
        <div class="accent-line"></div>
      </div>
      
      <div class="flex flex-col gap-4 reveal">
        @for (edu of educations; track edu.title) {
          <div class="bg-[var(--color-bg-3)] border border-[var(--color-border-color)] rounded-xl p-6 flex flex-col md:flex-row items-start gap-6">
            <div class="min-w-[80px] text-[var(--color-accent)] font-display font-bold shrink-0">{{ edu.year }}</div>
            <div>
              <h3 class="text-[1.125rem] font-bold mb-1">{{ edu.title }}</h3>
              <p class="text-[var(--color-text-2)] text-[0.875rem]">{{ edu.institution }}</p>
              @if (edu.details) {
                <div class="text-[var(--color-text-3)] text-[0.875rem] mt-2">{{ edu.details }}</div>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `
})
export class Education {
  educations = [
    { year: '2019–2023', title: "Bachelor's in Business Information Systems", institution: 'Helwan University, Cairo', details: 'Grade: Very Good · Graduation Project: Excellent' },
    { year: '2025', title: 'Full Stack Development Using MEARN', institution: 'ITI, Tanta — Intensive Training Program | Jul 2025 – Dec 2025' },
    { year: 'Course', title: 'Front-End Development (Angular)', institution: 'Route Academy', details: 'Angular · TypeScript · Frontend Architecture' }
  ];
}
