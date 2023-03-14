import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  constructor(public auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  isLoginMode = true;
  isLoading = false;
  error: string = '';
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    debugger
    console.log(form.value);
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    if(this.isLoginMode){
      ///
      // this.auth.Signin(email,password).subscribe((res:any) => {
      //   console.log(res);
      //   this.router.navigate(['/posts']);
      //   localStorage.setItem('user', JSON.stringify(res));
      //   this.isLoading = false;
      // },(err:any) => {
      //   console.log(err);
      //   switch(err.error.error.message ){
      //     case 'EMAIL_NOT_FOUND':
      //     this.error = 'This email is not found';
      //     setTimeout(() => {
      //       this.error
      //     }, 4000);
      //     break;
      //     case 'INVALID_PASSWORD':
      //     this.error = 'Your entered password id wrong';
      //     setTimeout(() => {
      //       this.error = '';
      //     }, 4000);
      //     break;
      //   }
      //   this.isLoading = false;
      // })
      this.auth.SignIn(email,password);
    }else{
      // this.auth.Signup(email,password).subscribe((res:any) => {
      //   console.log(res);
      //   this.isLoading = false;
      // },(err:any) => {
      //   console.log(err);
      //   switch(err.error.error.message ){
      //     case 'EMAIL_EXISTS':
      //     this.error = 'This email already exist';
      //     setTimeout(() => {
      //       this.error = '';
      //     }, 4000);
      //     break;
      //   }
      //   this.isLoading = false;
      // })
      this.auth.SignUp(email,password);

    }


    form.reset();
  }

  login() {
    // let user = this.afAuth.currentUser;

    // console.log(user,'userrr')

  }

  logineddd(){
   let dataa = this.auth.SendVerificationMail();

   console.log(dataa)

  }


  async GoogleAuth() {
    debugger
    try {
      // const provider = new firebase.auth.GoogleAuthProvider();
      // const credential = await this.afAuth.signInWithPopup(provider);
      // console.log(credential.user);
      this.router.navigate(['/posts']);
    } catch (error) {
      console.log(error);
    }
  }

}
