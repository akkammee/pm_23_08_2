import { Component } from '@angular/core';
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
  firstName = 'NOEL';
  lastName = 'TAYLOR';
  position = 'GRAPHIC & WEB DESIGNER';
  photoUrl = 'images.png';
  phones = ['+1-718-310-5588', '+1-313-381-8167'];
  website = 'www.yourwebsite.com';
  email = 'yourinfo@email.com';
  address = '769 Prudence Street';
  city = 'Lincoln Park, MI 48146';

  onContactClicked(type: string): void {
    console.log('Contact clicked:', type);
  }
}
