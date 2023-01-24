import { Component, OnInit, Input } from '@angular/core';
import { FeatureGroup } from 'src/app/models/missing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FeatureService } from 'src/app/service/feature.service';
import { ModelClass } from 'src/app/models/modelClass';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {

  featureGroup: FeatureGroup = new FeatureGroup();
  constructor(private activeModal:NgbActiveModal, private featureService:FeatureService) { }
@Input() data: FeatureGroup;

  ngOnInit() {
    if(this.data != null){
      this.featureGroup = this.data;
    }
  }
  close() {
    this.activeModal.close();
    // this.activeModal.dismiss();
  }
  Save(){
    if (ModelClass.isLogged) {
      this.featureGroup.createdBy = ModelClass.user.id;
      this.featureService.PostFeatureGroup(this.featureGroup).subscribe((response: any) => {
        this.close();
        });
    }
  }
  Edit(){
    if (ModelClass.isLogged) {
      this.featureGroup.modifiedBy = ModelClass.user.id;
      this.featureService.PutFeatureGroup(this.featureGroup).subscribe((response: any) => {
        this.close();
        });
    }
  }
}
