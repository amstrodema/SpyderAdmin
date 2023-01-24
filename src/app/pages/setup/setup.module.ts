import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import { HallModule } from './hall/hall.module';
import { CountryModule } from './country/country.module';
import { FeaturesModule } from './features/features.module';
import { ParamzModule } from './paramz/paramz.module';
@NgModule({
  imports: [
    CommonModule,
    HallModule,
    FeaturesModule,
    CountryModule,
    ParamzModule
  ],
  declarations: [SetupComponent]
})
export class SetupModule { }
