import { NgModule } from '@angular/core';
import { NbDialogModule, NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
// import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { LedgerComponent } from './ledger/ledger.component';
import { FollowupComponent } from './followup/followup.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { ReportsComponent } from './reports/reports.component';
import { AdminComponent } from './admin/admin.component';
import { BranchComponent } from './branch/branch.component';
import { CompanyModule } from './company/company.module';
import { ComponentsModule } from './components/components.module';
import { CompanyDetailsComponent } from './company/company-details/company-details.component';



@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    // ECommerceModule,
    MiscellaneousModule,
    CompanyModule,
    ComponentsModule,
    NbDialogModule.forChild(),
  ],
  declarations: [
    PagesComponent,
    NewCustomerComponent,
    SearchCustomerComponent,
    LedgerComponent,
    FollowupComponent,
    EmiCalculatorComponent,
    ReportsComponent,
    AdminComponent,
    BranchComponent,
  ],
})
export class PagesModule {
}
