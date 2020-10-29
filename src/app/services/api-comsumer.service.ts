import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiComsumerService {

  private authCodeNode = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1OTM4Yzc5MGNlMGJmMzFjZDRlNzJkNTkiLCJwcmltZXJOb21icmUiOiJGZWxpcGUiLCJwcmltZXJBcGVsbGlkbyI6IkNoYXJyaXMiLCJlbWFpbCI6ImFybm9sZC5jaGFycmlzQGdtYWlsLmNvbSIsImltYWdlIjoibnVsbCIsImlhdCI6MTQ5OTAwMTI0Nn0.QPyDVCKv557yurM1Bgwohv37dq_1e9qN6d9SiEhyvBU';
  private REST_API_SERVER = 'http://localhost:3977/';

  constructor(
    private _http: HttpClient,
  ) {
  }

  getMethod(webApi, token, page) {
    const urlWebApi = this.REST_API_SERVER + webApi;
    return this._http.get(urlWebApi);
  }
}
