import { Component, OnInit } from '@angular/core';
// import {employees} from '../mocks/employees';
import { EmployeeService, Employee } from '../services/employee-service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  // employees: Array<Employee> = employees;
  employees: Array<Employee> = [];

  constructor(public employeeService:EmployeeService) {
    this.employees = this.employeeService.employees;
  }

  ngOnInit(): void {
  }

  getSalaryColor(employee: Employee){
    return employee.salary > 1000 ? 'green' : 'black';
  }

}
