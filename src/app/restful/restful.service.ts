import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { IResponse } from '../base-model/base';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IConfig, IOptions, TConfigContentType } from './type';


@Injectable({
  providedIn: 'root',
})
export class RestfulService {

  private _snackBar = inject(MatSnackBar);

  constructor(private http: HttpClient) { }

  getHeaders(contentType?: TConfigContentType, headerObj?: { [key: string]: any }): HttpHeaders {
    let headers: { [key: string]: string } = {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    };
    if (!contentType) contentType = 'json';
    switch (contentType) {
      case 'form-urlencoded':
        headers['Content-Type'] = 'application/x-www-form-urlencoded';
        break;
    }
    if (headerObj) {
      headers = Object.assign(headers, headerObj);
    }
    return new HttpHeaders(headers);
  }

  getOptions(headers: HttpHeaders, responseType?: string) {
    return <IOptions>{
      observe: 'response',
      responseType: responseType || 'json',
      headers: headers,
    };
  }

  GET = (config: IConfig): Observable<IResponse> => {
    const headers = this.getHeaders(config.contentType, config.headerObj);
    return this.http.get<IResponse>(config.url, this.getOptions(headers, config.responseType)).pipe(
      map((res: HttpResponse<IResponse>) => this.responseHandle(res)),
      catchError((res: HttpErrorResponse) => this.httpStatusHandle(res))
    );
  };

  POST = (config: IConfig, body: any): Observable<IResponse> => {
    const headers = this.getHeaders(config.contentType, config.headerObj);
    return this.http.post<IResponse>(config.url, body, this.getOptions(headers, config.responseType)).pipe(
      map((res: HttpResponse<IResponse>) => this.responseHandle(res)),
      catchError((res: HttpErrorResponse) => this.httpStatusHandle(res))
    );
  };

  PUT = (config: IConfig, body: any): Observable<IResponse> => {
    const headers = this.getHeaders(config.contentType, config.headerObj);
    return this.http.put<IResponse>(config.url, body, this.getOptions(headers, config.responseType)).pipe(
      map((res: HttpResponse<IResponse>) => this.responseHandle(res)),
      catchError((res: HttpErrorResponse) => this.httpStatusHandle(res))
    );
  };

  PATCH = (config: IConfig, body: any): Observable<IResponse> => {
    const headers = this.getHeaders(config.contentType, config.headerObj);
    return this.http.patch<IResponse>(config.url, body, this.getOptions(headers, config.responseType)).pipe(
      map((res: HttpResponse<IResponse>) => this.responseHandle(res)),
      catchError((res: HttpErrorResponse) => this.httpStatusHandle(res))
    );
  };

  DELETE = (config: IConfig): Observable<IResponse> => {
    const headers = this.getHeaders(config.contentType, config.headerObj);
    return this.http.delete<IResponse>(config.url, this.getOptions(headers, config.responseType)).pipe(
      map((res: HttpResponse<IResponse>) => this.responseHandle(res)),
      catchError((res: HttpErrorResponse) => this.httpStatusHandle(res))
    );
  };

  responseHandle = (res: HttpResponse<any>): IResponse => {
    if (res.status < 200 || res.status >= 299) {
      throw new Error(`request error: ${res.status}, message: ${res.body}`);
    }
    return res.body;
  };

  httpStatusHandle = (res: HttpErrorResponse): Observable<IResponse> => {
    this._snackBar.open(res.message, 'close', { duration: 3000 });
    return of(res);
  };
}



