import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="hero" class="h-screen flex items-center relative">
      <div class="absolute inset-0 -z-10 opacity-5 bg-[linear-gradient(var(--color-accent)_1px,transparent_1px),linear-gradient(90deg,var(--color-accent)_1px,transparent_1px)] bg-[size:30px_30px]"
           style="mask-image: radial-gradient(circle at center, black 40%, transparent 80%); -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%);"></div>
      
      <div class="container mx-auto px-8">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,229,160,0.3)] bg-[rgba(0,229,160,0.06)] text-[var(--color-accent)] text-sm font-medium mb-6 animate-[fade-up_0.8s_ease_forwards] opacity-0" style="animation-delay: 0.1s">
          <div class="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-[pulse-badge_2s_infinite]"></div>
          Open to Work — Cairo & Remote
        </div>
        
        <h1 class="text-[clamp(3rem,8vw,6rem)] font-display font-extrabold leading-none tracking-tight mb-4 bg-gradient-to-br from-[var(--color-text-1)] to-[var(--color-text-2)] bg-clip-text text-transparent whitespace-pre-line animate-[fade-up_0.8s_ease_forwards] opacity-0" style="animation-delay: 0.25s">Al Hussein<br>Elassy</h1>
        
        <h2 class="text-2xl font-display font-semibold text-[var(--color-accent)] mb-6 animate-[fade-up_0.8s_ease_forwards] opacity-0" style="animation-delay: 0.4s">Full-Stack MEARN Developer</h2>
        
        <p class="text-[var(--color-text-2)] max-w-[600px] text-lg mb-8 animate-[fade-up_0.8s_ease_forwards] opacity-0" style="animation-delay: 0.55s">
          Crafting dynamic, responsive, and efficient user interfaces using modern web technologies.
        </p>
        
        <div class="flex gap-4 animate-[fade-up_0.8s_ease_forwards] opacity-0" style="animation-delay: 0.7s">
          <a href="#contact" class="btn btn-primary">Get In Touch</a>
          <a href="https://linkedin.com/in/hussein-elassy" target="_blank" rel="noopener noreferrer" class="btn btn-outline">LinkedIn</a>
        </div>
      </div>
    </section>
  `
})
export class Hero {}
