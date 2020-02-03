import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule, NbInputModule, NbButtonModule, NbCardModule } from '@nebular/theme';

//routing
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { OhayogozaimasuComponent } from './ohayogozaimasu/ohayogozaimasu.component';
import { LoginComponent } from './login/login.component';
import { BtnGroupComponent } from './btn-group/btn-group.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    OhayogozaimasuComponent,
    LoginComponent,
    BtnGroupComponent,
    // HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    FormsModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
