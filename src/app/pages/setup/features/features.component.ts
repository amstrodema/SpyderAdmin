import { Component, OnInit } from "@angular/core";
import { FeatureGroup, FeatureType } from "src/app/models/missing";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AddGroupComponent } from "./add-group/add-group.component";
import { FeatureService } from "src/app/service/feature.service";
import { AddTypeComponent } from "./add-type/add-type.component";

@Component({
  selector: "app-features",
  templateUrl: "./features.component.html",
  styleUrls: ["./features.component.scss"]
})
export class FeaturesComponent implements OnInit {
  featureGroups: FeatureGroup[] = [];
  featureTypes: FeatureType[] = [];

  constructor(private modalService: NgbModal, private featureService:FeatureService) {}

  ngOnInit() {
    this.GetGroups();
    this.GetTypes();
  }

  GetGroups(){
    this.featureService.GetFeatureGroups().subscribe((response: any) => {
      this.featureGroups = response;
    });
  }

  GetTypes(){
    this.featureService.GetFeatureTypes().subscribe((response: any) => {
      this.featureTypes = response;
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

  AddType(){
    const modalRef = this.modalService.open(AddTypeComponent, { scrollable: true, });

    modalRef.result.then((result) =>{
      this.GetTypes();
    })
  }
  EditType(data){
    const modalRef = this.modalService.open(AddTypeComponent, { scrollable: true, });
    modalRef.componentInstance.data = data;
    modalRef.result.then((result) =>{
      this.GetTypes();
    })
  }

}
