import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="projects" class="section container mx-auto px-8 py-24">
      <div class="reveal">
        <span class="section-label">What I've Built</span>
        <h2 class="section-title">Projects</h2>
        <div class="accent-line"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 reveal">
        @for (proj of projects; track proj.title) {
          <div class="bg-[var(--color-bg-3)] border border-[var(--color-border-color)] rounded-xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group">
            <div class="text-[0.75rem] text-[var(--color-accent)] bg-[rgba(0,229,160,0.1)] px-3 py-1 rounded-full self-start mb-4">{{ proj.badge }}</div>
            <h3 class="text-2xl font-bold mb-4">{{ proj.title }}</h3>
            <p class="text-[var(--color-text-2)] mb-6 flex-grow">{{ proj.description }}</p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              @for (tech of proj.technologies; track tech) {
                <span class="text-[0.75rem] text-[var(--color-text-3)]">{{ tech }}</span>
              }
            </div>
            
            <div class="flex flex-wrap gap-4 mt-auto">
              @for (link of proj.links; track link.url) {
                <a [href]="link.url" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-[0.875rem] text-[var(--color-text-1)] transition-colors hover:text-[var(--color-accent)]">
                  <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  {{ link.label }}
                </a>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `
})
export class Projects {
  projects = [
    {
      badge: 'ITI Graduation Project',
      title: 'Spotly — Event Management & Ticketing',
      description: 'Comprehensive event management platform with role-based dashboards (Admin/Organizer), real-time analytics, AI-powered event creation, QR code ticket validation, and full RTL/Arabic support.',
      technologies: ['Next.js 16', 'TypeScript', 'React 19', 'Tailwind v4', 'Zustand', 'OpenAI API', 'Recharts', 'i18n'],
      links: [{ label: 'GitHub', url: 'https://github.com/hussien450/spotly-clinet' }]
    },
    {
      badge: 'Full Stack — LMS Platform',
      title: 'EduTech LMS',
      description: 'Full learning management system built from scratch with secure RESTful APIs for authentication, course management, and multi-role access (admin/instructor/student). Normalized PostgreSQL schemas with complex relationships.',
      technologies: ['Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'REST APIs', 'JWT'],
      links: [
        { label: 'Frontend', url: 'https://github.com/EduTechTeam/LMS-Front' },
        { label: 'Backend', url: 'https://github.com/EduTechTeam/LMS-Back' }
      ]
    },
    {
      badge: 'Full Stack — Movie App',
      title: 'Personal Portfolio App',
      description: 'Full-stack movie web app with 10+ RESTful APIs for movies, authentication, and user favorites. Responsive frontend with Tailwind CSS and JWT-based authentication using React, Express, and MongoDB.',
      technologies: ['React', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT', 'REST APIs'],
      links: [{ label: 'GitHub', url: 'https://github.com/hussien450/portfolio-app' }]
    },
    {
      badge: 'Backend — E-commerce API',
      title: 'E-commerce RESTful API',
      description: 'Multi-role RESTful API supporting Admin, Seller, and Customer. 20+ CRUD endpoints for users, products, carts, and orders with RBAC, ownership validation, password recovery via NodeMailer. Deployed on Render.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'NodeMailer', 'RBAC', 'MVC'],
      links: [{ label: 'GitHub', url: 'https://github.com/hussien450/NodeJs-Ecommerce-Api' }]
    },
    {
      badge: 'Frontend — Team Project',
      title: 'Cyber-Tech E-commerce',
      description: 'Vanilla JavaScript e-commerce platform built with a 5-member team. Responsible for routing system, authentication, and RBAC modules. Built Home and Support pages, established the project design system.',
      technologies: ['Vanilla JS', 'HTML5', 'CSS3', 'Authentication', 'RBAC', 'Routing'],
      links: [{ label: 'GitHub', url: 'https://github.com/hussien450/ITI-CST-Project' }]
    }
  ];
}
