import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CaseStatusApiService {

  constructor(private http: HttpClient) { }

  getStatus(caseId: string){
    return this.http.get('http://localhost:8080/caseStatus/' + caseId);
  }
}
