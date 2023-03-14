import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit{


  constructor(private router:Router,private auth:AuthService) { }
  userdata:any;
  isLogiined:boolean = false;
  ngOnInit(){
    debugger
    this.auth.isuserLogged.subscribe(res => {
      console.log(res);
      this.isLogiined = !this.isLogiined;
    })
    // this.userdata = localStorage.getItem('user');
    // console.log(this.userdata);
    // if(this.userdata){

    // }else{
    //   this.isuserLogiined = false;
    //   console.log('falseee');
    // }

    // getAuth() {
    //   //console.log('called header ' + this.authService.isAuthenticated());
    //   return this.authService.isAuthenticated();
    // }
  }

  logout(){
    this.auth.SignOut();
    this.auth.isuserLogged.next(false);
  }

  Changepassword(){

  }

}
