import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from './../auth/auth.service';
import { throwError as ObservableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ENV } from './env.config';
import { EventModel } from './models/event.model';
import { RsvpModel } from './models/rsvp.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  private get _authHeader(): string {
    return `Bearer ${this.auth.accessToken}`;
  }

  // GET list of public, future events
  getEvents$(): Observable<EventModel[]> {
    return this.http
      .get<EventModel[]>(`${ENV.BASE_API}events`)
      .pipe(catchError(error => this._handleError(error)));
  }

  // GET all events - private and public (admin only)
  getAdminEvents$(): Observable<EventModel[]> {
    return this.http
      .get<EventModel[]>(`${ENV.BASE_API}events/admin`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // GET an event by ID (login required)
  getEventById$(id: string): Observable<EventModel> {
    return this.http
      .get<EventModel>(`${ENV.BASE_API}event/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // GET RSVPs by event ID (login required)
  getRsvpsByEventId$(eventId: string): Observable<RsvpModel[]> {
    return this.http
      .get<RsvpModel[]>(`${ENV.BASE_API}event/${eventId}/rsvps`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  private _handleError(err: HttpErrorResponse | any): Observable<any> {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    if (err.message && err.message.indexOf('No JWT present') > -1) {
      this.auth.login();
    }
    return ObservableThrowError(errorMsg);
  }
}
