
import { Routes } from '@angular/router';
import { ZodiacComponent } from './zodiac/zodiac.component';
import { NumerologyComponent } from './numerology/numerology.component';
import { HealthComponent } from './health/health.component';
import { LoginComponent } from './login/login.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomepageComponent } from './home-page/home-page.component';
import { CommentsComponent } from './comments/comments.component';
export const routes: Routes = [
  { path: 'zodiac', component: ZodiacComponent },
  { path: 'numerology', component: NumerologyComponent },
  { path: 'health', component: HealthComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navigation-bar', component: NavigationBarComponent },
  {path: 'home-page', component: HomepageComponent},
  {path: 'comments',component: CommentsComponent},
  { path: '', redirectTo: '/zodiac', pathMatch: 'full' }  
];



