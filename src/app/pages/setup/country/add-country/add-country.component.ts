import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/models/country';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelClass } from 'src/app/models/modelClass';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {
country: Country = new Country();
  constructor(private activeModal:NgbActiveModal, private countryService:CountryService) { }
@Input() data: Country;

  ngOnInit() {
    if(this.data != null){
      this.country = this.data;
    }
  }
  close() {
    this.activeModal.close();
    // this.activeModal.dismiss();
  }
  Save(){
    if (ModelClass.isLogged) {
      this.country.createdBy = ModelClass.user.id;
      this.countryService.PostCountry(this.country).subscribe((response: any) => {
        this.close();
        });
    }
  }
  Edit(){
    if (ModelClass.isLogged) {
      this.country.modifiedBy = ModelClass.user.id;
      this.countryService.PutCountry(this.country).subscribe((response: any) => {
        this.close();
        });
    }
  }
}
