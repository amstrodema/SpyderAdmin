import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Hall } from 'src/app/models/hall';
import { CountryService } from 'src/app/service/country.service';
import { Country } from 'src/app/models/country';
import { ModelClass } from 'src/app/models/modelClass';
import { HallService } from 'src/app/service/hall.service';

@Component({
  selector: 'app-add-hall',
  templateUrl: './add-hall.component.html',
  styleUrls: ['./add-hall.component.scss']
})
export class AddHallComponent implements OnInit {
@Input() data: Hall;
hall:Hall = new Hall();
countries:Country[] =[];
  constructor(private activeModal:NgbActiveModal, private hallService:HallService, private countryService:CountryService) { }

  ngOnInit() {
    this.GetCountries();
    if (this.data != null) {
      this.hall = this.data;
    }
  }

  GetCountries(){
    this.countryService.GetCountries().subscribe((response: any) => {
    this.countries = response;
    });
  }
  close() {
    this.activeModal.close();
    // this.activeModal.dismiss();
  }
  Save(){
    if (ModelClass.isLogged) {
      this.hall.createdBy = ModelClass.user.id;
      this.hallService.PostHall(this.hall).subscribe((response: any) => {
        this.close();
        });
    }
  }
  Edit(){
    if (ModelClass.isLogged) {
      this.hall.modifiedBy = ModelClass.user.id;
      this.hallService.PutHall(this.hall).subscribe((response: any) => {
        this.close();
        });
    }
  }

}
