import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './home/home.module';
import { SetupModule } from './setup/setup.module';
import { ModeratorModule } from './moderator/moderator.module';
import { AccountModule } from './account/account.module';
import { BroadcastModule } from './broadcast/broadcast.module';
import { ComplaintModule } from './complaint/complaint.module';
import { InboxModule } from './inbox/inbox.module';
import { ReportsModule } from './reports/reports.module';
import { TaskModule } from './task/task.module';
import { TransactionModule } from './transaction/transaction.module';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationModule,
    HomeModule,
    SetupModule,
    ModeratorModule,
    AccountModule,
    BroadcastModule,
    ComplaintModule,
    InboxModule,
    ReportsModule,
    TaskModule,
    TransactionModule
  ],
  declarations: [PagesComponent],
})
export class PagesModule { }
