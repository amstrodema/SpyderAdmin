import { DynamicScriptLoaderService } from "../service/dynamicScriptLoader.service";


export class scriptloader {

  public static loadscripts(){
    let  dynamicscriptloaderservice: DynamicScriptLoaderService = new DynamicScriptLoaderService();
      dynamicscriptloaderservice.load('easing','waypoints','owl','moment','moment-timezone','tempusdominus-bootstrap','main','lighthouse').then(data =>{

      }).catch(error => console.log("new error: "+error)
      );
  }

}
