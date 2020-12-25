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
  NbDialogModule,
  NbWindowModule,
  NbDialogRef,
} from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';


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
  FormsModule,
  Ng2SmartTableModule,
  NbDialogModule.forChild(),
  NbWindowModule.forChild(),
  ],
  entryComponents: [CompanyDetailsComponent]

})
export class CompanyModule { }
