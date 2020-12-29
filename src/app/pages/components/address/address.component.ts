import { Component, OnInit } from "@angular/core";

@Component({
  selector: "address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.scss"],
})
export class AddressComponent implements OnInit {
  constructor() {}

  public model = {
    country: "0",
    state: "1",
    city: "1",
    district: "1",
    pincode: "",
    address1: "",
    address2: ""
  };

  public selectedCountry: String;
  public selectedState: String;
  public selectedCity: String;
  public selectedDistrict: String;
  public pincode: String;

  ngOnInit(): void {
    // this.model = {
    //   country: "0",
    //   state: "1",
    //   city: "1",
    //   district: "1",
    //   pincode: ""
    // };
  }
}
