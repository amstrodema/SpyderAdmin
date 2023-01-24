import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ParamzService } from 'src/app/service/paramz.service';
import { Paramz } from 'src/app/models/paramz';
import { AddParamzComponent } from './add-paramz/add-paramz.component';

@Component({
  selector: 'app-paramz',
  templateUrl: './paramz.component.html',
  styleUrls: ['./paramz.component.scss']
})
export class ParamzComponent implements OnInit {

  constructor(private modalService:NgbModal, private paramzService:ParamzService) { }
  parameters: Paramz[] =[];
  ngOnInit() {
    this.GetParamz();
  }
  AddParamz(){
    const modalRef = this.modalService.open(AddParamzComponent, { scrollable: true, });

    modalRef.result.then((result) =>{
      this.GetParamz();
    })
  }
  EditParamz(paramz: Paramz){
    const modalRef = this.modalService.open(AddParamzComponent, { scrollable: true, });
    modalRef.componentInstance.data = paramz;
    modalRef.result.then((result) =>{
      this.GetParamz();
    })
  }
  GetParamz(){
    this.paramzService.GetParams().subscribe((response: any) => {
      this.parameters = response;
    });
  }
}
