import { Component } from "@angular/core";




@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrl: `./home-page.component.css`,
    

})
export class HomepageComponent{
    title = 'HOME';

    isShown = true;
   
  
    
      zodiacImg = "https://th.bing.com/th/id/OIP.uZJduMpNwBcZA7mbrJu2_QHaE8?w=282&h=188&c=7&r=0&o=5&dpr=1.5&pid=1.7"
      numerologyImg = "https://th.bing.com/th/id/OIP.FhS4-59I5VTFu1gRjilVwQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
      healthImg = "https://th.bing.com/th/id/OIP.Gsb6D_wDOiYfw5YK9lV2PgHaE8?w=261&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    
    
}