import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface IOptions {
    headers?: HttpHeaders | { [header: string]: string | string[] };
    observe: 'response';
    context?: HttpContext;
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
}

export interface IConfig {
    url: string;
    contentType?: TConfigContentType;
    headerObj?: { [key: string]: any };
    responseType?: string;
}

export type TConfigContentType = 'json' | 'form-urlencoded' | 'form-data';