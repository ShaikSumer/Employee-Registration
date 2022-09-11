import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeRequestDto } from './employee-request-dto';
import { EmployeeResponseDto } from './employee-response-dto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  rootEndPoint:string = 'http://localhost:8080/employee';
  RegisterEndPoint:string=this.rootEndPoint+'/addEmployee';
  getEndpoint:string=this.rootEndPoint+'/getEmployees';

  constructor(private http:HttpClient) { }
  getEmployees(){
    return this.http.get(`${this.getEndpoint}`);
  }

  doRegistration(Registerdetails:EmployeeRequestDto):Observable<EmployeeResponseDto>
  {
    console.log("inside registration");
    return this.http.post<EmployeeResponseDto>(`${this.RegisterEndPoint}`,Registerdetails);
  }

 

}
