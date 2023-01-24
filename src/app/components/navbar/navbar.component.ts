// import { ScriptLoader } from './../../models/script-loader';
import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { ModelClass } from 'src/app/models/modelClass';
import { LogoutService } from 'src/app/service/logout.service';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { Notifier } from 'src/app/models/notifier';
import { Registration } from 'src/app/models/registration';
import { Navbar } from 'src/app/models/navbar';
 declare function displayChatbox():any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  isLoggedIn: boolean = false;
  navbar = ModelClass.navBar;

  constructor( private element: ElementRef, private router: Router, private logOutService: LogoutService) {
  }

  ngOnInit() {
    ModelClass.LoadScripts();
    ModelClass.CheckLoggedIn();
    this.isLoggedIn = ModelClass.isLogged;
  }

  moveSide(){
    displayChatbox();
  }

  LogOut(){
   try {
    this.logOutService.LogOut(ModelClass.user.id).subscribe((response: ResponseMessage) => {
      if (response.statusCode == 200) {
        sessionStorage.clear();
        this.router.navigate([""], { replaceUrl: true });
        ModelClass.isLogged = false;
        ModelClass.user = new Registration();
        this.navbar = ModelClass.navBar = new Navbar();;
        Notifier.Notify(response.message, "success", 2000);
      } else {
        Notifier.Notify(response.message, "danger", 2000);
      }
      });
   } catch (error) {
    Notifier.Notify("Log out failed", "danger", 2000);
   }
  }

  FreeZonePages(val){
    switch (val) {
      case "wallet":
        this.router.navigate(["/search/wallet"], { replaceUrl: false });
        break;
      case "rank":
        this.router.navigate(["/search/rank"], { replaceUrl: false });
        break;
      case "market":
        this.router.navigate(["/search/market-place"], { replaceUrl: false });
        break;

      default:
        break;
    }
  }
  openPage(val) {
    switch (val) {
      case "petition":
        this.router.navigate(["/search/petition"], { replaceUrl: false });
        break;
      default:
        break;
    }

  }

}
