import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home-page/home-page.component';
import { ZodiacComponent } from './zodiac/zodiac.component';
import { NumerologyComponent } from './numerology/numerology.component';
import { HealthComponent } from './health/health.component';
import { LoginComponent } from './login/login.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  { path: 'home-page', component: HomepageComponent },
  { path: 'zodiac', component: ZodiacComponent },
  { path: 'numerology', component: NumerologyComponent },
  { path: 'health', component: HealthComponent },
  { path: 'login', component: LoginComponent },
  {path: 'comments', component: CommentsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Път по подразбиране
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

