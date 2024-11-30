import { Component } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-login',
  imports: [CommentsComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent { 
  errorMessage: string = '';

  onSubmit(event: Event) {
    event.preventDefault();  
    
    const emailInput = (event.target as HTMLFormElement).elements.namedItem('email') as HTMLInputElement;
    const passwordInput = (event.target as HTMLFormElement).elements.namedItem('password') as HTMLInputElement;

    const email = emailInput.value;
    const password = passwordInput.value;

    if (!email || !password) {
      this.errorMessage = 'Please fill in all fields.';
    } else {
      const token = 'user-token';
      localStorage.setItem('token',token);
      this.errorMessage = '';
   
      console.log('Email:', email);
      console.log('Password:', password);
      this.errorMessage = '';  
    }
  }
}   
