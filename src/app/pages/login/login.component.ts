import { Component, OnInit } from '@angular/core';
import { UserLog } from 'src/app/shared/modules/logUs.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { NotifService } from 'src/app/shared/services/notif/notif.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user:UserLog = {
  email:'',
  password:''
}
loginForm:NgForm;
access;
userObj;
isHiddenAlert:boolean = true;

  constructor(public router: Router,
    private loginServ:LoginService,
    private notifyServ:NotifService
    ) { }

  ngOnInit(): void {
  }
  onSubmit(loginForm){
    if(loginForm.valid){
      this.loginServ.checkJSONUser(this.user).subscribe(
        data => {
          this.access = data;
          this.loginServ.checkJSONBoardUser(this.access.accessToken).subscribe(
            data => {
              this.userObj = data;
              this.router.navigate(['/main']);
              localStorage.setItem('user', JSON.stringify(this.userObj));
            }, 
            err => {
              console.log(err)
            }
          )
        },
        err => {
          console.log(err);
          if(err.status === 404){
            this.showToasterError404();
          }
          if(err.status === 401){
            this.showToasterError401()
          }
        }
      )
    } else{
      this.isHiddenAlert = false;
    }
  }
    showToasterError404(){
      this.notifyServ.showError("You are not registered")
    }
    showToasterError401(){
      this.notifyServ.showError("Email or password incorrect")
    }

}
