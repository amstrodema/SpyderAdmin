import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModelClass } from "src/app/models/modelClass";
import { Location } from "@angular/common";
import { Registration } from "src/app/models/registration";
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  dashboard = "active";
  account;
 transaction;
  withdrawal;
  messaging;
  moderator;
  reports;
  setup;
  task;
  public menuItems: any[];
  public isCollapsed = true;
  isLogged = false;
  user:Registration = ModelClass.user;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLogged = ModelClass.isLogged;
    //  ScriptLoader.loadScripts();
    //   this.menuItems = ROUTES.filter(menuItem => menuItem);
    //   this.router.events.subscribe((event) => {
    //     this.isCollapsed = true;
    //  });
  }

  SetActive(val) {
    this.CLearActive();
    switch (val) {
      case "account":
      this.account = "active"
        break;
      case  "transaction":
      this.transaction = "active"
        break;
      case  "messaging":
      this.messaging = "active"
        break;
      case  "dashboard":
      this.dashboard = "active"
        break;
      case  "moderator":
      this.moderator = "active"
        break;
      case  "reports":
      this.reports = "active"
        break;
      case  "setup":
      this.setup = "active"
        break;
      case  "task":
      this.task = "active"
        break;
      case  "withdrawal":
      this.withdrawal = "active"
        break;

      default:
        break;
    }
  }

  CLearActive() {
    this.account = this.transaction = this.messaging = this.dashboard = this.moderator
     = this.reports = this.setup = this.task = this.withdrawal ="";
  }


}
