import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  downloadResume(): void {
    const link = document.createElement('a');

    link.href = '/assets/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click()
    document.body.removeChild(link);
  }
  openLinkedIn(): void {
    const linkedInUrl = 'https://www.linkedin.com/in/machado-lucasalmeida/';
    window.open(linkedInUrl, '_blank');
  }
  projectLinks: string[] = ['https://memory-game-inky-eight.vercel.app/', '', '', ''];
  repositorytLinks: string[] = ['https://github.com/machadolucasalmeida/memoryGame', '', '', ''];

  accessProject(indice: number) {
    const linkProject = this.projectLinks[indice];
    window.open(linkProject, '_blank');
  }

  accessRepository(indice: number) {
    const linkRepository = this.repositorytLinks[indice];
    window.open(linkRepository, '_blank');
  }
}
