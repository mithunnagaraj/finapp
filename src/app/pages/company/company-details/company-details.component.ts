import { Optional } from '@angular/core';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { AddressComponent } from 'app/pages/components/address/address.component';

@Component({
  selector: 'company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit{

  @Input() title: string;
  @ViewChild(AddressComponent) address;

  operation: String;

  constructor(protected ref: NbDialogRef<CompanyDetailsComponent>) {}
  ngOnInit(): void {
    this.operation = "Add";
  }

  public model = {
    fullName: "",
    shortName: "",
    ownerName: ""
  };

  public fullName: String;
  public shortName: String;
  public ownerName: String;

  dismiss() {
    this.ref.close();
  }

  addCompany() {
    this.model['address'] = this.address.model;
    alert("Data : " + this.model)
  }

  editCompany() {

  }
}
