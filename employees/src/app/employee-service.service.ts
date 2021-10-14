import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeServiceService {

  private baseUrl="http://localhost:9191/";

  constructor(private http:HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}`+"getEmployees");
  }

  createEmployee(employee:Employee): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+"addEmployee",employee);
  }

  getEmployeeById(id:number):Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/getEmployeeById/+${id}`);
  }

  updateEmployee(id:number,emp:Employee):Observable<Object>{
    return this.http.put(`${this.baseUrl}/updateEmployee/+${id}`,emp);
  }

  deleteEmployeeById(id:number):Observable<Object> {
    return this.http.delete<Object>(`${this.baseUrl}/deleteEmployee/${id}`);
  }
}
