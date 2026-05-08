import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { LanguageListComponent } from './language-list/language-list.component';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [AboutMeComponent, SkillListComponent, LanguageListComponent],
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent {

  aboutText = [
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type.`,
    `It has survived not only five centuries, but also the leap into electronic
     typesetting unchanged.`
  ];

  skills = [
    { name: 'Adobe Photoshop',      value: 75 },
    { name: 'Adobe Illustrator',    value: 70 },
    { name: 'Microsoft PowerPoint', value: 60 },
    { name: 'Microsoft Word',       value: 65 },
    { name: 'HTML-5/CSS-3',         value: 80 }
  ];

  languages = ['ENGLISH', 'SPANISH', 'FRENCH'];

  hobbies = [
    { name: 'Book Reading',  value: 60 },
    { name: 'Traveling',     value: 60 },
    { name: 'Playing Chess', value: 60 }
  ];

  onSectionToggled(section: string, isOpen: boolean): void {
    console.log(`Section "${section}" is now ${isOpen ? 'open' : 'closed'}`);
  }

  onItemHovered(itemName: string): void {
    console.log('Hovered item:', itemName);
  }
}
