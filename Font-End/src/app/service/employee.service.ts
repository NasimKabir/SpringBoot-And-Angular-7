import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getallEmployees(): Observable<any> {
    return this.http.get('http://localhost:8080/api/employee');
  }

  deleteEmployee(id): Observable<any> {
    return this.http.delete(`http://localhost:8080/api/employee/${id}`);
  }

  getEmployeesById(id): Observable<any> {
    return this.http.get(`http://localhost:8080/api/employee/${id}`);
  }
  update(id, emp): Observable<any> {
    return this.http.put(`http://localhost:8080/api/employee/${id}`, emp);
  }

  save(emp): Observable<Object> {
    return this.http.post(`http://localhost:8080/api/employee`, emp);
  }

}
