import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCountryComponent } from './add-country/add-country.component';
import { CountryService } from 'src/app/service/country.service';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  constructor(private modalService:NgbModal, private countryService:CountryService) { }
  countries: Country[] =[];
  ngOnInit() {
    this.GetCountries();
  }
  AddCountry(){
    const modalRef = this.modalService.open(AddCountryComponent, { scrollable: true, });

    modalRef.result.then((result) =>{
      this.GetCountries();
    })
  }
  EditCountry(country: Country){
    const modalRef = this.modalService.open(AddCountryComponent, { scrollable: true, });
    modalRef.componentInstance.data = country;
    modalRef.result.then((result) =>{
      this.GetCountries();
    })
  }
  GetCountries(){
    this.countryService.GetCountries().subscribe((response: any) => {
      this.countries = response;
    });
  }
}
