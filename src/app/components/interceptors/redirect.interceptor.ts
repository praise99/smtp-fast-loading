import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import { AuthenticationService } from "src/app/services/authentication.service";

@Injectable()
export class RedirectInterceptor implements HttpInterceptor {
	constructor(private authenticationService: AuthenticationService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			tap(
				() => {},
				(err) => {
					if (err.status === 401) {
						this.authenticationService.logout();
					}
				}
			)
		);
	}
}
