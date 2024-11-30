import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ZodiacComponent } from './zodiac/zodiac.component';
import { NumerologyComponent } from './numerology/numerology.component';
import { HealthComponent } from './health/health.component';
import { HomepageComponent } from './home-page/home-page.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginComponent,
    RegisterComponent,
    ZodiacComponent,
    NumerologyComponent,
    HealthComponent,
    HomepageComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
