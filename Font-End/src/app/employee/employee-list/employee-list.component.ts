import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  //employees: Array<any[]>;
  employees: Employee[];
  message: string;

  constructor(
    private empservice: EmployeeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    this.empservice.getallEmployees().subscribe(data => {
      this.employees = data
    }
    );
  }

  deleteEmployee(id) {
    this.empservice.deleteEmployee(id).subscribe(data => {
      console.log("deleted " + id);
      this.message = `Delete of Employee Successful! `;
      this.refresh()
    })

  }
  editEmployee(id) {
    console.log(` id is ${id}`);
    this.router.navigate(['employee-edit', id])
  }
  addemployee() {
    this.router.navigate(['employee-edit',-1])
  }
}
