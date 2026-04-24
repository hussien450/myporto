import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="skills" class="section container mx-auto px-8 py-24">
      <div class="reveal">
        <span class="section-label">Skills & Tools</span>
        <h2 class="section-title">Skills & Tools</h2>
        <div class="accent-line"></div>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
        @for (cat of skills; track cat.category) {
          <div class="bg-[var(--color-bg-3)] border border-[var(--color-border-color)] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] group">
            <div class="text-[var(--color-accent)] font-semibold text-sm uppercase mb-4 tracking-wider">{{ cat.category }}</div>
            <div class="flex flex-wrap gap-2">
              @for (tag of cat.tags; track tag) {
                <span class="bg-[var(--color-bg-4)] border border-[var(--color-border-color)] text-[var(--color-text-2)] px-3 py-1 rounded-full text-sm transition-colors duration-300 group-hover:hover:bg-[var(--color-accent)] group-hover:hover:text-[var(--color-bg-1)] group-hover:hover:border-[var(--color-accent)]">{{ tag }}</span>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `
})
export class Skills {
  skills = [
    { category: 'Languages', tags: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'] },
    { category: 'Frontend', tags: ['React.js', 'Next.js', 'Redux', 'Angular', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Shadcn', 'Radix UI'] },
    { category: 'Backend', tags: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'PostgreSQL', 'MongoDB', 'MVC Architecture', 'OOP', 'JWT Auth'] },
    { category: 'Tools & DevOps', tags: ['Git', 'GitHub', 'VS Code', 'Postman', 'MongoDB Atlas', 'npm', 'pnpm', 'Render'] },
    { category: 'Soft Skills', tags: ['Leadership', 'Decision Making', 'Communication', 'Teamwork', 'Time Management', 'Problem Solving'] },
    { category: 'Languages Spoken', tags: ['Arabic — Native', 'English — B2'] }
  ];
}
