import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavigationBarComponent,
   ],
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HOME';
  onSubmit() {
    
  }
  addComment(){

  }
  editComment() {

  }
deleteComment() {

}
  saveComments() {

  }
  onLogout() {

  }

  isShown = true;
 

  togleModal() {
    
    this.isShown = !this.isShown;
  }
}

