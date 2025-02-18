import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmFormFieldComponent, HlmErrorDirective } from '@spartan-ng/ui-formfield-helm';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [
    HlmInputDirective,
    HlmLabelDirective,
    HlmFormFieldComponent,
    HlmErrorDirective,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() group: FormGroup = new FormGroup({});
  @Input() controlName: string = '';

  get control() {
    return this.group.get(this.controlName);
  }
}
