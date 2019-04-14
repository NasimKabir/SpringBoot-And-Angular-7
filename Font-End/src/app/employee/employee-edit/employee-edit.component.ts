import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employee: Employee
  id: number

  constructor(
    private empservice: EmployeeService,
    private activerouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.activerouter.snapshot.params['id']
    this.employee = new Employee(this.id, '', '', '')
    if (this.id != -1) {
      this.empservice.getEmployeesById(this.id).subscribe(data => {
        this.employee = data
      })
    }
  }

  saveEmployee() {
    if (this.id == -1) {
      this.empservice.save(this.employee).subscribe(data => {
        console.log(data)
        this.router.navigate(['employee-list'])
      })
    }
    else {
      this.empservice.update(this.id, this.employee).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['employee-list'])
        }
      )
    }
  }
}
