import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ECommerceComponent } from "./e-commerce/e-commerce.component";
import { NotFoundComponent } from "./miscellaneous/not-found/not-found.component";
import { NewCustomerComponent } from "./new-customer/new-customer.component";
import { SearchCustomerComponent } from "./search-customer/search-customer.component";
import { LedgerComponent } from "./ledger/ledger.component";
import { FollowupComponent } from "./followup/followup.component";
import { EmiCalculatorComponent } from "./emi-calculator/emi-calculator.component";
import { ReportsComponent } from "./reports/reports.component";
import { AdminComponent } from "./admin/admin.component";
import { BranchComponent } from './branch/branch.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: ECommerceComponent,
      },
      {
        path: "iot-dashboard",
        component: DashboardComponent,
      },
      {
        path: "new-customer",
        component: NewCustomerComponent,
      },
      {
        path: "search-customer",
        component: SearchCustomerComponent,
      },
      {
        path: "ledger",
        component: LedgerComponent,
      },
      {
        path: "followup",
        component: FollowupComponent,
      },
      {
        path: "emi-calculator",
        component: EmiCalculatorComponent,
      },
      {
        path: "reports",
        component: ReportsComponent,
      },
      {
        path: "admin",
        component: AdminComponent,
      },
      {
        path: "company",
        component: CompanyComponent,
      },
      {
        path: "branch",
        component: BranchComponent,
      },
      {
        path: "layout",
        loadChildren: () =>
          import("./layout/layout.module").then((m) => m.LayoutModule),
      },
      {
        path: "forms",
        loadChildren: () =>
          import("./forms/forms.module").then((m) => m.FormsModule),
      },
      {
        path: "ui-features",
        loadChildren: () =>
          import("./ui-features/ui-features.module").then(
            (m) => m.UiFeaturesModule
          ),
      },
      {
        path: "modal-overlays",
        loadChildren: () =>
          import("./modal-overlays/modal-overlays.module").then(
            (m) => m.ModalOverlaysModule
          ),
      },
      {
        path: "extra-components",
        loadChildren: () =>
          import("./extra-components/extra-components.module").then(
            (m) => m.ExtraComponentsModule
          ),
      },
      {
        path: "maps",
        loadChildren: () =>
          import("./maps/maps.module").then((m) => m.MapsModule),
      },
      {
        path: "charts",
        loadChildren: () =>
          import("./charts/charts.module").then((m) => m.ChartsModule),
      },
      {
        path: "editors",
        loadChildren: () =>
          import("./editors/editors.module").then((m) => m.EditorsModule),
      },
      {
        path: "tables",
        loadChildren: () =>
          import("./tables/tables.module").then((m) => m.TablesModule),
      },
      {
        path: "miscellaneous",
        loadChildren: () =>
          import("./miscellaneous/miscellaneous.module").then(
            (m) => m.MiscellaneousModule
          ),
      },
      {
        path: "",
        redirectTo: "/auth/login",
        pathMatch: "full",
      },
      {
        path: "/",
        redirectTo: "/iot-dashboard",
        pathMatch: "full"
      },
      {
        path: "**",
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
