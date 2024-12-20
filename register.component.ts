import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errorMessage: string = '';

  onSubmit(event: Event) {
    event.preventDefault();  
    
    const emailInput = (event.target as HTMLFormElement).elements.namedItem('email') as HTMLInputElement;
    const passwordInput = (event.target as HTMLFormElement).elements.namedItem('password') as HTMLInputElement;
    const confirmPasswordInput = (event.target as HTMLFormElement).elements.namedItem('confirmPassword') as HTMLInputElement;

    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (!email || !password || !confirmPassword) {
      this.errorMessage = 'Please fill in all fields.';
    } else if (password !== confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
    } else {
      
      console.log('Email:', email);
      console.log('Password:', password);
      this.errorMessage = '';  
    }
  }
}