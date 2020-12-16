import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company.component';



@NgModule({
  declarations: [EditCompanyComponent, CompanyListComponent, CompanyComponent],
  imports: [
    CommonModule,
    NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  ]
})
export class CompanyModule { }
