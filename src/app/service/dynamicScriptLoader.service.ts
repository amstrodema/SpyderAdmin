import { Injectable } from '@angular/core';

interface Scripts{
  name: string;
  src: string
}

export const ScriptStore: Scripts[] = [
  // {name: 'jquerry', src: 'assets/js/jquery-3.4.1.min.js'},
  {name: 'lighthouse', src: 'assets/js/bootstrap.bundle.min.js'},
  // {name: 'chart', src: 'assets/lib/chart/chart.min.js'},
  {name: 'easing', src: 'assets/lib/easing/easing.min.js'},
  {name: 'waypoints', src: 'assets/lib/waypoints/waypoints.min.js'},
  {name: 'owl', src: 'assets/lib/owlcarousel/owl.carousel.min.js'},
  {name: 'moment', src: 'assets/lib/tempusdominus/js/moment.min.js'},
  {name: 'moment-timezone', src: 'assets/lib/tempusdominus/js/moment-timezone.min.js'},
  {name: 'tempusdominus-bootstrap', src: 'assets/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js'},
  {name: 'main', src: 'assets/js/main.js'}
];
// "src/assets/js/main.js",
// "src/assets/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js",
// "src/assets/lib/tempusdominus/js/moment-timezone.min.js",
// "src/assets/lib/tempusdominus/js/moment.min.js",
// "src/assets/lib/owlcarousel/owl.carousel.min.js",
// "src/assets/lib/waypoints/waypoints.min.js",
// "src/assets/lib/easing/easing.min.js",
// "src/assets/lib/chart/chart.min.js",
// "src/assets/js/jquery-3.4.1.min.js",
// "src/assets/js/bootstrap.bundle.min.js"
declare var document: any;

@Injectable({
  providedIn: 'root'
})
export class DynamicScriptLoaderService {
private scripts:any = {};

constructor() {
  ScriptStore.forEach((script: any) => {
    this.scripts[script.name] = {
      loaded: false,
      src: script.src
    };
  });
}

load(...scripts: string[]) {
  const promises: any[] = [];
  scripts.forEach((script) => promises.push(this.loadScript(script)));
  return Promise.all(promises);
}

loadScript(name: string) {
  return new Promise((resolve, reject) => {
    if (!this.scripts[name].loaded) {
      //load script
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = this.scripts[name].src;
      if (script.readyState) {  //IE
          script.onreadystatechange = () => {
              if (script.readyState === "loaded" || script.readyState === "complete") {
                  script.onreadystatechange = null;
                  this.scripts[name].loaded = true;
                  resolve({script: name, loaded: true, status: 'Loaded'});
              }
          };
      } else {  //Others
          script.onload = () => {
              this.scripts[name].loaded = true;
              resolve({script: name, loaded: true, status: 'Loaded'});
          };
      }
      script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
      document.getElementsByTagName('head')[0].appendChild(script);
    } else {
      resolve({ script: name, loaded: true, status: 'Already Loaded' });
    }
  });
}

}
