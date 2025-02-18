import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HlmCardImports } from '@spartan-ng/ui-card-helm';
import { TextInputComponent } from '../../../components/inputs/text-input/text-input.component';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SharedModule,
    HlmCardImports,
    TextInputComponent,
    HlmButtonDirective,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  public onSubmit() {
    console.log(this.form.value);
  }
}
