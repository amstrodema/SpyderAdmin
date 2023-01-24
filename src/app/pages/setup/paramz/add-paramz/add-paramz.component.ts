import { Component, OnInit, Input } from '@angular/core';
import { Paramz } from 'src/app/models/paramz';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ParamzService } from 'src/app/service/paramz.service';
import { ModelClass } from 'src/app/models/modelClass';

@Component({
  selector: 'app-add-paramz',
  templateUrl: './add-paramz.component.html',
  styleUrls: ['./add-paramz.component.scss']
})
export class AddParamzComponent implements OnInit {
  paramz: Paramz = new Paramz();
  constructor(private activeModal:NgbActiveModal, private paramService:ParamzService) { }
@Input() data: Paramz;

  ngOnInit() {
    if(this.data != null){
      this.paramz = this.data;
    }
  }
  close() {
    this.activeModal.close();
    // this.activeModal.dismiss();
  }
  Save(){
    if (ModelClass.isLogged) {
      this.paramz.createdBy = ModelClass.user.id;
      this.paramService.PostParam(this.paramz).subscribe((response: any) => {
        this.close();
        });
    }
  }
  Edit(){
    if (ModelClass.isLogged) {
      this.paramz.modifiedBy = ModelClass.user.id;
      this.paramService.PutParam(this.paramz).subscribe((response: any) => {
        this.close();
        });
    }
  }
}
