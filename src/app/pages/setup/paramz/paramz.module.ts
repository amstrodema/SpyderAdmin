import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParamzComponent } from './paramz.component';
import { AddParamzComponent } from './add-paramz/add-paramz.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ParamzComponent, AddParamzComponent]
})
export class ParamzModule { }
