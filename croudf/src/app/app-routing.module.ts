import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaydescComponent } from './displaydesc/displaydesc.component';
import { CompntComponent } from './compnt/compnt.component';
import { BodycompComponent } from './bodycomp/bodycomp.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { RegisterComponent } from './login/register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { UpdateprojectsComponent } from './profile/updateprojects/updateprojects.component';

const routes: Routes = [
  { path:'', component:BodycompComponent},
  {path: 'displayd', component: DisplaydescComponent},
  {path: 'progct', component: CompntComponent},
  {path:'login',component:LoginpageComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent},
  {path:'payment',component:PaymentComponent},
  {path:'updateproject',component:UpdateprojectsComponent},
  {path: '**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
