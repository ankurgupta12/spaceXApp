import { Component, OnInit } from "@angular/core";
import { HttpServiceService } from "./http-service.service";
import { ISpaceModal } from "./modal/ispacemodal";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "space-test";
  public listItem: ISpaceModal[];
  public years = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',
    '2017', '2018', '2019', '2020'];
  selectedYear: string;
  selectedlaunch: boolean;
  selectedlanding: any;
  public filterObject = { launch_success: '', land_success: '', launch_year: '' };
  constructor(private httpServiceService: HttpServiceService) { }

  ngOnInit() {
    if(localStorage.getItem('filterValue')){
      this.filterObject = JSON.parse(localStorage.getItem('filterValue'))
    }
    this.httpServiceService.GetData(this.filterObject).subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: (error) => {
        console.log(error);
      }
    });
  }

  public filterData(filterValue?: string): void {
    localStorage.setItem('filterValue', JSON.stringify(this.filterObject));
    this.httpServiceService.GetData(this.filterObject).subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: (error) => {
        console.log(error);
      }
    });
  }


  private handleUpdateResponse(response: ISpaceModal[]) {
    this.listItem = response;
  }
}
