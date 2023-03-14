import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path :'', redirectTo:'singup', pathMatch:'full'},
  {path:'singup', component:SignupComponent},
  {path:'login', component: SigninComponent},
  {path:'posts', component:PostsComponent,canActivate: [AuthGuard]},
  {path:'verify-email-address', component:VerifyEmailComponent},
  {path:'verify-email-address', component:VerifyEmailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
