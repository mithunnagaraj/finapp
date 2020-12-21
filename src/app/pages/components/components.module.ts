import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { AddressComponent } from './address/address.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddressComponent],
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
  FormsModule
  ],
  exports: [AddressComponent]
})
export class ComponentsModule { }
