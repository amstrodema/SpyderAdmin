import { Component, OnInit } from "@angular/core";
import { FeatureGroup, FeatureType } from "src/app/models/missing";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AddGroupComponent } from "./add-group/add-group.component";
import { FeatureService } from "src/app/service/feature.service";
import { AddTypeComponent } from "./add-type/add-type.component";
import { ViewTypeComponent } from "./view-type/view-type.component";

@Component({
  selector: "app-features",
  templateUrl: "./features.component.html",
  styleUrls: ["./features.component.scss"]
})
export class FeaturesComponent implements OnInit {
  featureGroups: FeatureGroup[] = [];

  constructor(private modalService: NgbModal, private featureService:FeatureService) {}

  ngOnInit() {
    this.GetGroups();
  }

  GetGroups(){
    this.featureService.GetFeatureGroups().subscribe((response: any) => {
      this.featureGroups = response;
    });
  }

  AddGroup(){
    const modalRef = this.modalService.open(AddGroupComponent, { scrollable: true, });

    modalRef.result.then((result) =>{
      this.GetGroups();
    })
  }
  EditGroup(data){
    const modalRef = this.modalService.open(AddGroupComponent, { scrollable: true, });
    modalRef.componentInstance.data = data;
    modalRef.result.then((result) =>{
      this.GetGroups();
    })
  }


  ViewType(featureGroup: FeatureGroup){
    const modalRef = this.modalService.open(ViewTypeComponent, { scrollable: true, });
    modalRef.componentInstance.featureGroup = featureGroup;
    modalRef.result.then((result) =>{

    })
  }


}
