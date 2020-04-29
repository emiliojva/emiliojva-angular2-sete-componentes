import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../services/employee-service';
// import {employees as employeesMock, Employee} from '../mocks/employees';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.scss']
})
export class EmployeeNewComponent implements OnInit {

  employee: Employee;
  // public name:string = ''; // property bind []
  // public salary:number = 0;
  public lastName:string = ''; // reativa [(ngModel)]
  // employees:Array<any> = [];
  // employees:Array<Employee> = [];

  constructor(public employeeService: EmployeeService) {
    // setTimeout(()=>{ this.name = "Mateus meu filho lindo" },3000)
    this.employee = {name:'',salary:0};
  }

  ngOnInit(): void {

  }

  addEmployee(event){
    let copy = Object.assign({},this.employee);
    // this.employees.push(this.name);
    copy.bonus = copy.salary >= 1000 ? 0 : copy.bonus;
    this.employeeService.addEmployee(copy);
    console.log(this.employeeService.employees);
  }

  echo(){
    return JSON.stringify(this.employeeService.employees);
  }

}
