import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about" class="section container mx-auto px-8 py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-center md:text-left">
        
        <div class="reveal">
          <div class="w-[320px] h-[320px] rounded-full border-2 border-[rgba(0,229,160,0.4)] bg-[var(--color-bg-3)] mx-auto relative flex flex-col items-center justify-center overflow-hidden cursor-pointer">
           
              <div class="flex w-[350px] flex-col items-center gap-2 text-[var(--color-text-3)] text-sm p-4 text-right">
                <img class="object-cover rounded-full border-2" src="1.jpg" alt="">
              </div>
          </div>
        </div>

        <div class="reveal">
          <span class="section-label">About Me</span>
          <h2 class="section-title">Turning ideas into <span class="text-[var(--color-accent)]">real products</span></h2>
          <p class="text-[var(--color-text-2)] mb-5">Full-Stack MEARN Developer specializing in crafting dynamic, responsive, and efficient user interfaces using modern web technologies.</p>
          <p class="text-[var(--color-text-2)] mb-5">Passionate about building modern and user-friendly web applications, I continuously develop my skills to deliver high-quality full-stack solutions. From normalized database schemas to pixel-perfect frontends — I build it all.</p>
          <p class="text-[var(--color-text-2)] mb-5">Currently based in Gharbia, Egypt — ready to relocate to Cairo. Open to full-time opportunities.</p>
          
          <div class="flex gap-8 mt-8 flex-wrap justify-center md:justify-start">
            <div>
              <div class="font-display font-extrabold text-3xl text-[var(--color-accent)] leading-none">5+</div>
              <div class="text-xs uppercase text-[var(--color-text-3)] tracking-wider mt-2">Projects</div>
            </div>
            <div>
              <div class="font-display font-extrabold text-3xl text-[var(--color-accent)] leading-none">1+</div>
              <div class="text-xs uppercase text-[var(--color-text-3)] tracking-wider mt-2">Years Exp</div>
            </div>
            <div>
              <div class="font-display font-extrabold text-3xl text-[var(--color-accent)] leading-none">5+</div>
              <div class="text-xs uppercase text-[var(--color-text-3)] tracking-wider mt-2">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class About {
  avatarUrl = signal<string | null>(null);

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.avatarUrl.set(e.target?.result as string);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}
