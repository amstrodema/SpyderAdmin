import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModelClass } from "src/app/models/modelClass";
import { Location } from "@angular/common";

declare function friendlist(): any;
declare function back_chatBox(): any;
declare function displayChatbox(): any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  route: string;
}
// { path: '/search/app/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
export const ROUTES: RouteInfo[] = [
  {
    path: "/search/hall-of-legends",
    title: "Legends",
    icon: "",
    class: "",
    route: "legends"
  },
  {
    path: "/search/hall-of-fame",
    title: "Hall of Fame",
    icon: "",
    class: "",
    route: "hall-of-fame"
  },
  {
    path: "/search/hall-of-shame",
    title: "Hall of Shame",
    icon: "",
    class: "",
    route: "hall-of-shame"
  },
  {
    path: "/search/hall-of-fallen-heros",
    title: "Fallen Heros",
    icon: "",
    class: "",
    route: "fallen-heros"
  },
  {
    path: "/search/hall-of-heros",
    title: "Heros",
    icon: "",
    class: "",
    route: "heros"
  },
  {
    path: "/search/death-register",
    title: "Death Register",
    icon: "",
    class: "",
    route: "death-register"
  },
  {
    path: "/search/marriage-register",
    title: "Marriage Register",
    icon: "",
    class: "",
    route: "marriage-register"
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  dashboard = "active";
  account;
  transaction;
  messaging;
  moderator;
  reports;
  setup;
  task;
  public menuItems: any[];
  public isCollapsed = true;
  isLogged = false;

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

      default:
        break;
    }
  }

  CLearActive() {
    this.account = this.transaction = this.messaging = this.dashboard = this.moderator
     = this.reports = this.setup = this.task ="";
  }

  GetTitle(location: Location) {
    var path = location.prepareExternalUrl(location.path());
    try {
      return ROUTES.find(x => x.path == path).title;
    } catch (e) {
      return "";
    }
  }

  GetRoute(location: Location) {
    var path = location.prepareExternalUrl(location.path());
    try {
      return ROUTES.find(x => x.path == path).route;
    } catch (e) {
      return "";
    }
  }
}
