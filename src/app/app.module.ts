//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//routing
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { OhayogozaimasuComponent } from './ohayogozaimasu/ohayogozaimasu.component';
import { LoginComponent } from './login/login.component';
import { BtnGroupComponent } from './btn-group/btn-group.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
// import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    OhayogozaimasuComponent,
    LoginComponent,
    BtnGroupComponent,
    RegisterComponent,
    // HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
