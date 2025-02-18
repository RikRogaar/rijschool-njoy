import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HlmErrorDirective } from '@spartan-ng/ui-formfield-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
  selector: 'app-text-area-input',
  standalone: true,
  imports: [
    HlmInputDirective,
    HlmLabelDirective,
    HlmErrorDirective,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './text-area-input.component.html',
  styleUrl: './text-area-input.component.scss'
})
export class TextAreaInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() group: FormGroup = new FormGroup({});
  @Input() controlName: string = '';

  get control() {
    return this.group.get(this.controlName);
  }
}
