import { Component } from '@angular/core';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { provideIcons } from '@ng-icons/core';
import { lucidePhone, lucideMail } from '@ng-icons/lucide';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    HlmIconComponent,
  ],
  providers: [
    provideIcons({ lucidePhone, lucideMail })
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
