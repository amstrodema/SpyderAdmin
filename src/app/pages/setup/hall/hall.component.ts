import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddHallComponent } from './add-hall/add-hall.component';
import { Hall } from 'src/app/models/hall';
import { HallService } from 'src/app/service/hall.service';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit {

  constructor(private modalService: NgbModal, private hallService:HallService) { }
  halls: Hall[] =[];

  ngOnInit() {
    this.GetHalls();
  }
  AddHall(){
    const modalRef = this.modalService.open(AddHallComponent, { scrollable: true, });

    modalRef.result.then((result) =>{
      this.GetHalls();
    })
  }
  EditHall(data){
    const modalRef = this.modalService.open(AddHallComponent, { scrollable: true, });
    modalRef.componentInstance.data = data;
    modalRef.result.then((result) =>{
      this.GetHalls();
    })
  }
  GetHalls(){
    this.hallService.GetHalls().subscribe((response: any) => {
      this.halls = response;
    });
  }
}
