import { User } from './../interfaces/user.interface';
import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { AuthStatus, CheckTokenResponse, LoginResponse } from '../interfaces';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  private cookieService = inject(CookieService);

  //Manejare un objeto como un usuario o un null
  private _currentUser = signal<User | null>(null);

  //Para saber si esta autenticado
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  //Expongo usuario y estado a traves de una señal computada
  public currentUser = computed(() => this._currentUser());

  public authStatus = computed(() => this._authStatus());

  constructor() {
    this.checkAuthStatus()
      .pipe(
        tap(() => console.log('Se emitió un valor desde checkAuthStatus()')),
        catchError((error) => {
          console.error('Se produjo un error en checkAuthStatus()', error);
          throw error;
        })
      )
      .subscribe();
  }

  private setAuthentication(user: User, token: string): boolean {
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    this.cookieService.set('token', token);
    console.log('Asigna el valor de authenticated');

    return true;
  }

  login(email: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}/login`;
    const body = { email, password };

    return this.http.post<LoginResponse>(url, body).pipe(
      map(({ user, token }) => this.setAuthentication(user, token)),
      catchError((err) => throwError(() => err.error.message))
    );
  }

  checkAuthStatus(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/check-token`;
    const token = this.cookieService.get('token');

    if (!token) return of(false);

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<CheckTokenResponse>(url, { headers }).pipe(
      map(({ user, token }) => this.setAuthentication(user, token)),
      catchError(() => {
        this._authStatus.set(AuthStatus.notAuthenticated);
        return of(false);
      })
    );
  }

  logout() {
    this.cookieService.delete('token');
    this._currentUser.set(null);
    this._authStatus.set(AuthStatus.notAuthenticated);
  }
}
