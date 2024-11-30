import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = '';

  onSubmit(event: Event) {
    event.preventDefault();  // За да не презарежда страницата при submit
    
    const emailInput = (event.target as HTMLFormElement).elements.namedItem('email') as HTMLInputElement;
    const passwordInput = (event.target as HTMLFormElement).elements.namedItem('password') as HTMLInputElement;

    const email = emailInput.value;
    const password = passwordInput.value;

    if (!email || !password) {
      this.errorMessage = 'Please fill in all fields.';
    } else {
      // Логика за вход
      console.log('Email:', email);
      console.log('Password:', password);
      this.errorMessage = '';  // Изчистване на съобщения за грешка
    }
  }
}