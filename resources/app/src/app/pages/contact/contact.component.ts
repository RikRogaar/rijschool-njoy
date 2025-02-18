import { Component, computed, inject, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { TextInputComponent } from '../../components/inputs/text-input/text-input.component';
import { TextAreaInputComponent } from '../../components/inputs/text-area-input/text-area-input.component';
import { lucidePhone, lucideMail, lucideMapPin, lucideChevronDown, lucideChevronUp } from '@ng-icons/lucide';
import { HlmCardImports } from '@spartan-ng/ui-card-helm';
import { SelectInputComponent } from '../../components/inputs/select-input/select-input.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    SharedModule,
    TextInputComponent,
    TextAreaInputComponent,
    HlmIconComponent,
    HlmCardImports,
    HlmButtonDirective,
    HlmIconComponent,
    FormsModule,
    ReactiveFormsModule,
    SelectInputComponent
  ],
  providers: [
    provideIcons({ lucidePhone, lucideMail, lucideMapPin, lucideChevronDown, lucideChevronUp })
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly translate = inject(TranslateService);

  public subjectOptions = computed(() => {
    const optionsData = this.translate.instant('CONTACT.FORM.INPUTS.SUBJECT.OPTIONS');
    const options = Object.values(optionsData) as CapitalizedOption[];

    return options.map((option: CapitalizedOption) => ({
      NAME: option.NAME,
      VALUE: option.VALUE
    }));
  });

  public form = new FormGroup({
    subject: new FormControl(this.subjectOptions()[0].VALUE, [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    postal_code: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });


  constructor () {
    this.form.valueChanges.subscribe(console.log);
  }

  public onSubmit() {
    console.log(this.form.valid)
  }
}

export interface CapitalizedOption {
  NAME: string;
  VALUE: string;
}
