import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NbDialogService } from '@nebular/theme';
import { CompanyDetailsComponent } from './company-details/company-details.component';

@Component({
  selector: 'ngx-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  displayDetails(){
    this.dialogService.open(CompanyDetailsComponent, {
      context: {
        title: 'Edit Company',
      },
      hasScroll:false,
    });
    //  const dialogRef = this.dialog.open(CompanyDetailsComponent);
    //  dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}
