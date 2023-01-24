import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { AddTypeComponent } from './add-type/add-type.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [FeaturesComponent, AddTypeComponent, AddGroupComponent]
})
export class FeaturesModule { }
