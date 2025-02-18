import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { HlmCardContentDirective, HlmCardDescriptionDirective, HlmCardFooterDirective } from '@spartan-ng/ui-card-helm';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { HlmCardHeaderDirective } from '@spartan-ng/ui-card-helm';
import { HlmCardTitleDirective } from '@spartan-ng/ui-card-helm';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { TextInputComponent } from '../../components/inputs/text-input/text-input.component';
import { TextAreaInputComponent } from '../../components/inputs/text-area-input/text-area-input.component';
import { lucidePhone, lucideMail, lucideMapPin } from '@ng-icons/lucide';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    SharedModule,
    TextInputComponent,
    TextAreaInputComponent,
    HlmIconComponent,
    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmButtonDirective,
    HlmIconComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideIcons({ lucidePhone, lucideMail, lucideMapPin })
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });

  public onSubmit() {
    console.log(this.form.valid)
  }
}
