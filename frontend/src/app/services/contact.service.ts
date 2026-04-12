import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // Replace with your Azure API URL after deployment
  private apiUrl = 'https://rohit-resume-api.azurewebsites.net/api/contact';

  constructor(private http: HttpClient) {}

  sendMessage(payload: ContactMessage): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(this.apiUrl, payload);
  }
}
