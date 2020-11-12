import { Component, OnInit } from '@angular/core';
import { UserMod } from 'src/app/shared/modules/user.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IncomesService } from 'src/app/shared/services/incomes/incomes.service';
import { SavingService } from 'src/app/shared/services/saving/saving.service';
import { SpendsService } from 'src/app/shared/services/spends/spends.service';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NotifService } from 'src/app/shared/services/notif/notif.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  modalRef: BsModalRef;
  user;
  date;
  incomesArr;
  savingArr;
  almoustIncomes = 0;
  spendsArr;
  activeCount = 0;
  activeCountSaving = 0;
  elem;
  constructor( private router:Router,
    private incomServ:IncomesService,
    private spendsServ:SpendsService,
    private saveServ: SavingService,
    private modalService: BsModalService,
    private notufyServ:NotifService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.date = new Date();
    this.getIncomes();
    this.getSaving();
    this.getSpends();
  }
  
  logOut():void{
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  private getIncomes(){
    this.incomServ.getJSONUserIncomes(this.user.user.id).subscribe(
      data => {
        this.incomesArr = data;
        for(let i=0; i<this.incomesArr.length; i++){
          let date = new Date();
          let mm = date.getMonth()+1;
          let arrDate = this.incomesArr[i].date;
          arrDate = arrDate.slice(5, 7);
          if(mm == arrDate){
            this.almoustIncomes +=parseInt(this.incomesArr[i].amount);
          }
        }
      },
      err => {
        console.log(err)
      }
    )
  }

  private getSaving(){
    this.saveServ.getJSONUserSaving(this.user.user.id).subscribe(
      data => {
        this.savingArr = data;
      },
      err => {
        console.log(err)
      }
    )
  }
  private getSpends(){
    this.spendsServ.getJSONUserSpends(this.user.user.id).subscribe(
      data => {
        this.spendsArr = data;
        console.log(data)
      },
      err => {
        console.log(err)
      }
    )
  }
  setActive(){
    if(this.activeCount == 0){
      document.querySelector('.incomeActive').classList.add('active');
      this.activeCount = 1;
    } else{
      document.querySelector('.incomeActive').classList.remove('active');
      this.activeCount = 0;
    }
  }

  clickSaving(calc: TemplateRef<any>){
    this.elem = event.target as HTMLTextAreaElement;
    if(this.activeCount == 1){
      this.modalRef = this.modalService.show(calc);
      document.querySelector('.incomeActive').classList.remove('active');
      this.activeCount = 0;
    } else {
      if(this.elem.classList[0] == 'icons'){
        this.elem.classList.add('active');
        this.activeCountSaving = 1;
      }
    }
  }
  checkSpend(calc: TemplateRef<any>){
    if(this.activeCountSaving == 1){
      this.modalRef = this.modalService.show(calc);
      this.elem.classList.remove('active');
      this.activeCountSaving = 0;
    } else{
      this.activeCountSaving = 1;
      this.showToasterError();
    }
  }
  showToasterError(){
    this.notufyServ.showError("Activate one of saving button");
  }
}
