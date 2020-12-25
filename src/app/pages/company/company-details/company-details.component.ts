import { Optional } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { Address } from 'cluster';

@Component({
  selector: 'company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit{

  @Input() title: string;

  constructor() {}
  ngOnInit(): void {
    // this.dialogConfig.disableClose = false;
  }
  

  public fullName: String;
  public shortName: String;
  public ownerName: String;
  public address: Address;


  dismiss() {
    // this.ref.close();
  }
}
