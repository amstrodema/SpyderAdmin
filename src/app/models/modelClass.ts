import { Navbar } from './navbar';
import { Registration } from "./registration";
import { RequestObject } from "./requestObject";
import { GenericModel } from "./genericModel";
import { scriptloader } from './script-loader';


export class ModelClass {

static baseUrl:string = "http://localhost:38519/";
static baseUrl2:string = "http://localhost:4200/";

// static baseUrl:string = "https://api.logit.com.ng/";
// static baseUrl2:string = "https://spyder.logit.com.ng";
static isLogged:boolean = false;
static user:Registration;
static prevRoute:string;
static errorPage:string;
static navBar:Navbar = new Navbar();
static isLoading:boolean = false;


static CheckLoggedIn(){
  let x = JSON.parse(sessionStorage.getItem("User"));
  if(x != null){
    this.isLogged = true;
    this.user = x;

    this.navBar.userName = this.user.fName +" "+this.user.fName;
  }
  else{
    this.isLogged = false;
  }
}

static LoadScripts(){
  if(GenericModel.galleryLoadCount == 0)
  {
    GenericModel.galleryLoadCount = 1;
    scriptloader.loadscripts();
  }
}

static LoadNavBar(){

}
}
