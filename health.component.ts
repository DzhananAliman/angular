import { Component } from '@angular/core';

@Component({
  selector: 'app-health',
  imports: [],
  templateUrl: './health.component.html',
  styleUrl: './health.component.css'
})
export class HealthComponent {
  title = 'Health';

  isShown = true;
 
  health1Img = "https://th.bing.com/th/id/OIP.zWCMikU0u8oUY3-hGVUslAHaDh?w=349&h=166&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  health2Img = "https://th.bing.com/th/id/OIP.1yumUP7pm7OiCQa2RAA-oAHaDW?w=269&h=158&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  health3Img = "https://th.bing.com/th/id/OIP.XNWk4V1_ae5EYD9ezWXX6AHaEj?w=273&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  health4Img = "https://th.bing.com/th/id/OIP.GogchTs8zUGsnJvNDvPFJQHaE7?w=266&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"

}
