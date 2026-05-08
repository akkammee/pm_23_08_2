import { Component, Input } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillListComponent, SkillItem } from './skill-list/skill-list.component';
import { LanguageListComponent } from './language-list/language-list.component';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [AboutMeComponent, SkillListComponent, LanguageListComponent],
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent {
  @Input() aboutText: string[] = [];
  @Input() skills: SkillItem[] = [];
  @Input() languages: string[] = [];
  @Input() hobbies: SkillItem[] = [];
}