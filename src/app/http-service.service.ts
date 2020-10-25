import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ISpaceModal } from "./modal/ispacemodal";

@Injectable({
  providedIn: "root"
})
export class HttpServiceService {
  constructor(protected httpClient: HttpClient) { }

  // public GetData(): Observable<any> {
  //   return this.httpClient.get(
  //     "https://api.spaceXdata.com/v3/launches?limit=8"
  //   );
  // }
  public GetData(filterValues: any): Observable<any> {
    
    let url = 'https://api.spaceXdata.com/v3/launches?limit=8';

    if (filterValues['launch_year']) {
      url = `${url}&launch_year=${filterValues['launch_year']}`
    }
    if (filterValues['land_success']) {
      url = `${url}&land_success=${filterValues['land_success']}`
    }
    if (filterValues['launch_success']) {
      url = `${url}&launch_success=${filterValues['launch_success']}`
    }
    return this.httpClient.get(url);
  }
}
