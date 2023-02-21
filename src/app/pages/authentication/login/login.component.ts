import { Component, OnInit } from '@angular/core';
import { Notifier } from 'src/app/models/notifier';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { ModelClass } from 'src/app/models/modelClass';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginModel: Login = new Login();
  isLogged: boolean = ModelClass.isLogged;
  message= "";
  constructor(private loginService:LoginService, private router:Router) {
    if (ModelClass.isLogged) {
      this.router.navigate(["admin"], { replaceUrl: true });
    }
  }
  ngOnInit() {

      // Notifier.Notify("Invalid password", "danger", 2000);
  }
  Login(){
    console.log(this.loginModel);

    if(this.loginModel.username == undefined || this.loginModel.username == ""){
      this.message ="Invalid email / username";
      Notifier.Notify("", "danger", 2000);
    }
    else if(this.loginModel.password == undefined || this.loginModel.password == ""){
      this.message ="Invalid password";
      Notifier.Notify("Invalid password", "danger", 2000);
    }
    else{
      this.message ="";
      this.loginService.Login(this.loginModel).subscribe((response: ResponseMessage) => {
        this.message = response.message;
        if (response.statusCode == 200) {
          sessionStorage.setItem("User", JSON.stringify(response.data.user));
          sessionStorage.setItem("Settings", JSON.stringify(response.data.settings));
          sessionStorage.setItem("ClientSystem", JSON.stringify(response.data.clientSystem));

          ModelClass.CheckLoggedIn();
          //To Do: use localStorage -- Impt
          //localStorage.setItem("User", JSON.stringify(response.data));

          Notifier.Notify(response.message, "success", 2000);
          this.router.navigate(["admin"], { replaceUrl: true });
        } else {
          Notifier.Notify(response.message, "danger", 2000);
        }
      });
    }
  }

  ForgotPassword(){
    if(this.loginModel.username == undefined || this.loginModel.username == ""){
      Notifier.Notify("Invalid email / username", "danger", 2000);
    }
    else{
      this.loginService.ForgotPassword(this.loginModel.username).subscribe((response: ResponseMessage) => {
        if (response.statusCode == 200) {
          Notifier.Notify(response.message, "success", 2000);
        } else {
          Notifier.Notify(response.message, "danger", 2000);
        }
      });
    }
  }
}
