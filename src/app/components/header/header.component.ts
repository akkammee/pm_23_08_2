import { Component, Input } from '@angular/core';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ContactBoxComponent } from './contact-box/contact-box.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProfileInfoComponent, ContactBoxComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() firstName = '';
  @Input() lastName = '';
  @Input() position = '';
  @Input() photoUrl = '';
  @Input() phones: string[] = [];
  @Input() website = '';
  @Input() email = '';
  @Input() address = '';
  @Input() city = '';
}