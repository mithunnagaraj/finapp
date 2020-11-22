import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { LedgerComponent } from './ledger/ledger.component';
import { FollowupComponent } from './followup/followup.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { ReportsComponent } from './reports/reports.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
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
  ],
})
export class PagesModule {
}