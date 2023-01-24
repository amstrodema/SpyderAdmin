import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeratorComponent } from './moderator.component';
import { UsersModule } from './users/users.module';
import { PetitionComponent } from './petition/petition.component';

@NgModule({
  imports: [
    CommonModule,
    UsersModule
  ],
  declarations: [ModeratorComponent, PetitionComponent]
})
export class ModeratorModule { }
