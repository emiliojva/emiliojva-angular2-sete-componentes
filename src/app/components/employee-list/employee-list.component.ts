import { Component, OnInit, ViewChild } from '@angular/core';
// import {employees} from '../mocks/employees';
import { EmployeeService, Employee } from '../../services/employee-service';
import { EmployeeNewComponent } from '../employee-new/employee-new.component';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  newEmployeeAdded: Employee;
  showMessageSuccess:boolean = false;
  employees: Array<Employee> = []; // employees: Array<Employee> = employees;

  // https://angular.io/api/core/ViewChild#description
  @ViewChild('myModal') // Pegar referencia de um elemento, no caso o EmployeeNewModalComponent. No caso de mais de diretiva dentro list Ele pega todas as instancias indexadas.
  employeeNewModal: EmployeeNewModalComponent;

  constructor(public employeeService:EmployeeService) {
    this.employees = this.employeeService.employees;
    // this.newEmployeeAdded = {name:'',salary:0}; - Usando notação newEmployee?.name check exists
  }

  ngOnInit(): void {
  }

  getSalaryColor(employee: Employee){
    return employee.salary > 1000 ? 'green' : 'black';
  }

  showNewEmployeeModal(evt){
    this.employeeNewModal.show();

  }

  onNewEmployee(employee: Employee){
    this.newEmployeeAdded = employee;
    this.showMessageSuccess = true;
  }
}
