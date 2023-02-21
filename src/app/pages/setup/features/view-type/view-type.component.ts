import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeatureGroup, FeatureType } from 'src/app/models/missing';
import { FeatureService } from 'src/app/service/feature.service';
import { AddTypeComponent } from '../add-type/add-type.component';

@Component({
  selector: 'app-view-type',
  templateUrl: './view-type.component.html',
  styleUrls: ['./view-type.component.scss']
})
export class ViewTypeComponent implements OnInit {

  featureTypes: FeatureType[] = [];
  @Input() featureGroup: FeatureGroup;
  constructor(private featureService: FeatureService, private modalService:NgbModal, private activeModal:NgbActiveModal) { }

  ngOnInit() {
    this.GetTypes();
  }
  GetTypes(){

    if (this.featureGroup.code == "" || this.featureGroup.code == undefined || this.featureGroup.code == null) {
     //to do: alert Invalid Operation
     alert(this.featureGroup.code)
    } else {
      this.featureService.GetFeatureTypesByGroupCode(this.featureGroup.code).subscribe((response: any) => {
        this.featureTypes = response;
      });
    }

  }

  AddType(featureGroupID: string){
    const modalRef = this.modalService.open(AddTypeComponent, { scrollable: true, });
    modalRef.componentInstance.featureGroupID = featureGroupID;
    modalRef.result.then((result) =>{
      this.GetTypes();
    })
  }

  close() {
    this.activeModal.close();
    // this.activeModal.dismiss();
  }
  EditType(data){
    const modalRef = this.modalService.open(AddTypeComponent, { scrollable: true, });
    modalRef.componentInstance.data = data;
    modalRef.result.then((result) =>{
      this.GetTypes();
    })
  }
}
