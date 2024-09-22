import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMsg = '';
                if (error.error instanceof ErrorEvent) {
                    // 客戶端錯誤
                    errorMsg = `Client-side error: ${error.error.message}`;
                } else {
                    // 服務器端錯誤
                    errorMsg = `Server-side error: ${error.status} ${error.message}`;
                }
                console.error(errorMsg);
                return throwError(() => new Error(errorMsg));
            })
        );
    }
    
}
