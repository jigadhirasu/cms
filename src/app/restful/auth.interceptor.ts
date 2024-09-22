import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authToken = sessionStorage.getItem('bearerToken');

        if (!authToken) {
            return next.handle(req);
        }

        const clonedReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${authToken}`)
        });
        // 傳遞修改後的請求到下一個處理器
        return next.handle(clonedReq);

    }

}
