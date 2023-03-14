import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private fb:FormBuilder,public auth:AuthService, private snackbar:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  login(){
    debugger
    this.auth.SignIn(this.loginForm.value.email,this.loginForm.value.password).then(res => {
      console.log(res);
    })
    // this.userService.getUser(this.loginForm.value.email).then((res:any)=>{
    //   console.log(res);
    //   if(res.length == 0){
    //     console.log("account does not exist");
    //     this.snackbar.open('Account does not exist','ok');
    //   }else{
    //     if(res[0].password === this.loginForm.value.password){
    //       console.log("matched");
    //       this.snackbar.open('Login successful', 'ok');
    //       this.userService.user = res[0];
    //       localStorage.setItem('user', JSON.stringify(res[0]));
    //       this.router.navigate(['/posts']);
    //     }else{
    //       console.log("incorrect password");
    //       this.snackbar.open('Incorrect password', 'ok');
    //     }
    //   }
    // }).catch((err)=>{
    //   console.log(err);
    // });
  }

}
