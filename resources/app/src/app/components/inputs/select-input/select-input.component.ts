import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { lucideChevronDown, lucideChevronUp } from '@ng-icons/lucide';
import { TranslateModule } from '@ngx-translate/core';
import { HlmIconModule, provideIcons } from '@spartan-ng/ui-icon-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { BrnSelectImports } from '@spartan-ng/ui-select-brain';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';

@Component({
  selector: 'app-select-input',
  standalone: true,
  imports: [
    HlmSelectImports,
    BrnSelectImports,
    HlmIconModule,
    HlmLabelDirective,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    provideIcons({ lucideChevronDown, lucideChevronUp })
  ],
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.scss'
})
export class SelectInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() group: FormGroup = new FormGroup({});
  @Input() controlName: string = '';
  @Input() options: Record<string, string>[] = [];
  @Input() multiple: boolean = false;

  get control() {
    return this.group.get(this.controlName);
  }
}
