import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompntComponent } from './compnt/compnt.component';
import { DisdesComponent } from './disdes/disdes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DisplaydescComponent } from './displaydesc/displaydesc.component';
import { BodycompComponent } from './bodycomp/bodycomp.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { RegisterComponent } from './login/register/register.component';
import { BaseinludComponent } from './login/baseinlud/baseinlud.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { DisplayprojectsComponent } from './profile/displayprojects/displayprojects.component';
import { AddprojectsComponent } from './profile/addprojects/addprojects.component';
import { PaymentComponent } from './payment/payment.component';
import { UpdateprojectsComponent } from './profile/updateprojects/updateprojects.component';

@NgModule({
  declarations: [
    AppComponent,
    CompntComponent,
    DisdesComponent,
    NavbarComponent,
    FooterComponent,
    DisplaydescComponent,
    BodycompComponent,
    NotFoundComponent,
    LoginpageComponent,
    RegisterComponent,
    BaseinludComponent,
    ProfileComponent,
    DisplayprojectsComponent,
    AddprojectsComponent,
    PaymentComponent,
    UpdateprojectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
