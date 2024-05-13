import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    FloatLabelModule,
    ReactiveFormsModule,
    InputTextModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  regForm: FormGroup;

  constructor() {
    this.regForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  register() {
    const { email, password } = this.regForm.value;
    this.authService.register(email, password).subscribe({
      next: () => {
        Swal.fire('Éxito', 'Registro exitoso', 'success');
        setTimeout(() => {
          this.router.navigateByUrl('/auth/login');
        }, 1000);
      },
      error: (message) => {
        Swal.fire('Error', message, 'error');
      },
    });
  }
}
