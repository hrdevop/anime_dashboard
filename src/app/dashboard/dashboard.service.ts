import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IData, IPagination } from './dashboard.interface';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http: HttpClient) { }

  getData$(pagination: IPagination): Observable<IData> {
    const { currentPage, limit, searchValue } = pagination;

    const queryParams: Record<string, string | number> = {
      page: currentPage,
      limit: limit,
      order_by: 'favorites',
      sort: 'desc'
    };
    if (searchValue) {
      queryParams['q'] = searchValue;
    }
    const url = `${environment.API}?${this.buildQueryString(queryParams)}`;
    return this._http.get<IData>(url);
  }

  private buildQueryString(params: { [key: string]: any }): string {
    return Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  }
}
