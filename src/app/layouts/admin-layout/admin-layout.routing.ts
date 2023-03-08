import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/pages/authentication/login/login.component';
import { DashboardComponent } from 'src/app/pages/home/dashboard/dashboard.component';
import { HallComponent } from 'src/app/pages/setup/hall/hall.component';
import { CountryComponent } from 'src/app/pages/setup/country/country.component';
import { AccountComponent } from 'src/app/pages/account/account.component';
import { InboxComponent } from 'src/app/pages/inbox/inbox.component';
import { ComplaintComponent } from 'src/app/pages/complaint/complaint.component';
import { TaskComponent } from 'src/app/pages/task/task.component';
import { BroadcastComponent } from 'src/app/pages/broadcast/broadcast.component';
import { PetitionComponent } from 'src/app/pages/moderator/petition/petition.component';
import { FeaturesComponent } from 'src/app/pages/setup/features/features.component';
import { TransactionComponent } from 'src/app/pages/transaction/transaction.component';
import { ParamzComponent } from 'src/app/pages/setup/paramz/paramz.component';
import { WithdrawalComponent } from 'src/app/pages/withdrawal/withdrawal.component';

export const AdminLayoutRoutes: Routes = [
  { path: '',       component: DashboardComponent },
  { path: 'account',       component: AccountComponent },
  { path: 'task',       component: TaskComponent },
  { path: 'inbox',       component: InboxComponent },
  { path: 'complaint',       component: ComplaintComponent },
  { path: 'broadcast',       component: BroadcastComponent },
  { path: 'transaction',       component: TransactionComponent },
  //setup
  { path: 'country',       component: CountryComponent },
  { path: 'petition',       component: PetitionComponent },
  { path: 'hall',       component: HallComponent },
  { path: 'feature',       component: FeaturesComponent },
  { path: 'params',       component: ParamzComponent },
  { path: 'withdrawal',       component: WithdrawalComponent }
 ];
