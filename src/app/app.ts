import { Component, ChangeDetectionStrategy, AfterViewInit, signal } from '@angular/core';
import { Nav } from './nav/nav';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Experience } from './experience/experience';
import { Projects } from './projects/projects';
import { Education } from './education/education';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Nav, Hero, About, Skills, Experience, Projects, Education, Contact, Footer],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html'
})
export class App implements AfterViewInit {
  title = signal('myporto');

  ngAfterViewInit() {
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }
}
