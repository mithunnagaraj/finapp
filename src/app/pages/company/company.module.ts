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
  NbInputModule,
} from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CompanyListComponent, CompanyComponent, CompanyDetailsComponent],
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
  NbInputModule,
  ComponentsModule,
  FormsModule
  ]
})
export class CompanyModule { }
