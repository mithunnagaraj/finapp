import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor() { }

  public selectedCountry: String;
  public selectedState: String;
  public selectedCity: String;
  public selectedDistrict: String;
    public pincode: String;

  ngOnInit(): void {
    this.selectedCountry = '0';
  this.selectedState = "1";
  this.selectedCity = "1";
  this.selectedDistrict = "1";
  }

  

}
