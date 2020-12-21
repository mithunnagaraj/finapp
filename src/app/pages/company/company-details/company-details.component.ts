import { Component, OnInit } from '@angular/core';
import { Address } from 'cluster';

@Component({
  selector: 'company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  constructor() { }

  public fullName: String;
  public shortName: String;
  public ownerName: String;
  public address: Address;

  ngOnInit(): void {
  }

}
