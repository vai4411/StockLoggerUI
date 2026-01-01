import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InfoResponse {
  returnCode: string;
  data: {
    days: string;
    profit: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private apiUrl = 'https://stockloggerapi-b9asduegaddta5cd.canadacentral-01.azurewebsites.net/info';
  private apiInsertUrl = 'https://stockloggerapi-b9asduegaddta5cd.canadacentral-01.azurewebsites.net/insert';
  private apiUpdateUrl = 'https://stockloggerapi-b9asduegaddta5cd.canadacentral-01.azurewebsites.net/update';
  private apiHistoryUrl = 'https://stockloggerapi-b9asduegaddta5cd.canadacentral-01.azurewebsites.net/list';
  private apiSyncUrl = 'https://stockloggerapi-b9asduegaddta5cd.canadacentral-01.azurewebsites.net/sync';

  constructor(private http: HttpClient) { }

  Info(): Observable<InfoResponse> {
    return this.http.post<InfoResponse>(this.apiUrl,null);
  }

  Insert(data: any):Observable<InfoResponse> {
    return this.http.post<InfoResponse>(this.apiInsertUrl, data);
  }

  Update(data: any):Observable<InfoResponse>{
    return this.http.post<InfoResponse>(this.apiUpdateUrl,data);
  }

  History(data: any):Observable<InfoResponse>{
    return this.http.post<InfoResponse>(`${this.apiHistoryUrl}?stock_name=${encodeURIComponent(data)}`,data);
  }

  Sync():Observable<InfoResponse> {
    return this.http.post<InfoResponse>(this.apiSyncUrl,null);
  }
}
