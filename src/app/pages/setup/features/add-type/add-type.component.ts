import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FeatureType, FeatureGroup } from 'src/app/models/missing';
import { ModelClass } from 'src/app/models/modelClass';
import { FeatureService } from 'src/app/service/feature.service';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.scss']
})
export class AddTypeComponent implements OnInit {
  featureType: FeatureType = new FeatureType();
  featureGroups:FeatureGroup[] = [];
  constructor(private activeModal:NgbActiveModal, private featureService:FeatureService) { }
@Input() data: FeatureType;
@Input() featureGroupID: string;
isProcessing = false;

  ngOnInit() {
    if(this.data != null){
      this.featureType = this.data;
    }
    this.GetFeatureGroups();
  }
  close() {
    this.activeModal.close();
    // this.activeModal.dismiss();
  }

  GetFeatureGroups(){
    this.featureService.GetFeatureGroups().subscribe((response: any) => {
    this.featureGroups = response;
    });
  }

  Save(){
    this.isProcessing = true;
    if (ModelClass.isLogged) {
      this.featureType.featureGroupID =  this.featureGroupID;
      this.featureType.createdBy = ModelClass.user.id;
      this.featureService.PostFeatureType(this.featureType).subscribe((response: any) => {
        alert("Saved Successfully");
        this.featureType = new FeatureType();
        this.isProcessing = false;
        });
    }
  }
  Edit(){
    this.isProcessing = true;
    if (ModelClass.isLogged) {
      this.featureType.modifiedBy = ModelClass.user.id;
      this.featureService.PutFeatureType(this.featureType).subscribe((response: any) => {
        this.close();
        });
    }
  }
}
