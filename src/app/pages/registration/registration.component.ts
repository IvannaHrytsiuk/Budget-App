import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserMod } from 'src/app/shared/modules/user.model';
import { NotifService } from 'src/app/shared/services/notif/notif.service';
import { RegistrService } from 'src/app/shared/services/registr/registr.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm:NgForm;
  user:UserMod = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    balance:'',
    roles: ['user']
  }
  isHiddenAlert:boolean = true;

  constructor( private regService:RegistrService,
    public router: Router,
    public notifService:NotifService) { }

  ngOnInit(): void {
  }
  onSubmit(registerForm: NgForm) {
    if(registerForm.valid){
      this.regService.addJSONUser(this.user).subscribe(
        ()=>{
          this.showToasterSuccess();
          this.cleanForm();
          setTimeout(_=>{
            this.router.navigate([`/login`]);
          },1000)
        }, err =>{
          this.showToasterError();
          this.cleanForm();
        }
      )
    } else {
      this.isHiddenAlert = false;
    }
  }
  showToasterSuccess(){
    this.notifService.showSuccess("You are successfully registered :)")
  }
  showToasterError(){
    this.notifService.showError("Server not working. Please, try again later.")
  }
  cleanForm():void{
    this.user = {
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      balance:'',
      roles: ['user']
    }
  }
}
