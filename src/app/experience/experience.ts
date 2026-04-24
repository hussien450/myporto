import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="experience" class="section container mx-auto px-8 py-24">
      <div class="reveal">
        <span class="section-label">Career Path</span>
        <h2 class="section-title">Work Experience</h2>
        <div class="accent-line"></div>
      </div>
      
      <div class="pl-8 relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:w-px before:bg-[var(--color-border-color)] reveal">
        @for (exp of experiences; track exp.title) {
          <div class="relative mb-12 last:mb-0 before:content-[''] before:absolute before:top-[0.35rem] before:left-[calc(-2rem-4.5px)] before:w-[10px] before:h-[10px] before:bg-[var(--color-accent)] before:rounded-full before:shadow-[0_0_10px_rgba(0,229,160,0.6)]">
            <div class="text-[0.875rem] text-[var(--color-text-3)] mb-2">{{ exp.date }}</div>
            <div class="text-xl font-bold text-[var(--color-text-1)] mb-1">{{ exp.title }}</div>
            <div class="text-[var(--color-accent)] font-medium mb-4">{{ exp.company }}</div>
            <div class="text-[var(--color-text-2)]">
              <ul class="list-disc pl-5 mt-2 space-y-1">
                @for (desc of exp.descriptions; track desc) {
                  <li>{{ desc }}</li>
                }
              </ul>
            </div>
          </div>
        }
      </div>
    </section>
  `
})
export class Experience {
  experiences = [
    {
      date: 'Jan 2026 – Mar 2026',
      title: 'Full Stack Developer',
      company: 'EduTech Consulting & Training',
      descriptions: [
        'Built EduTech LMS from scratch with Next.js frontend + Node.js/Express backend + PostgreSQL',
        'Secure RESTful APIs for auth, course management, user roles (admin/instructor/student)',
        'Normalized PostgreSQL schemas: users, courses, lessons, enrollments',
        'Authentication, authorization, protected routes, data validation, API security, clean architecture'
      ]
    },
    {
      date: 'Jul 2025 – Dec 2025',
      title: 'Full Stack Developer Intern (MEARN)',
      company: 'ITI, Tanta',
      descriptions: [
        'Intensive MEARN training program building production-quality projects'
      ]
    },
    {
      date: 'Jan 2019 – Mar 2019',
      title: 'Software Trainee — Frontend',
      company: 'Diva Lap Company (6 October)',
      descriptions: [
        '3-month intensive training on HTML5, CSS3 (Flexbox & Grid), ES6+ JavaScript'
      ]
    }
  ];
}
