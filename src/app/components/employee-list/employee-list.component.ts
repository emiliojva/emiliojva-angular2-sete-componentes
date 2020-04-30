import { Component, OnInit, ViewChild } from '@angular/core';
// import {employees} from '../mocks/employees';
import { EmployeeService, Employee } from '../../services/employee-service';
import { EmployeeNewComponent } from '../employee-new/employee-new.component';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  newEmployeeAdded: Employee;
  editEmployee: Employee;
  showMessageSuccess:boolean = false;
  employees: Array<Employee> = []; // employees: Array<Employee> = employees;

  // https://angular.io/api/core/ViewChild#description
  @ViewChild('employeeNewModal') // Pegar referencia de um elemento, no caso o EmployeeNewModalComponent. No caso de mais de diretiva dentro list Ele pega todas as instancias indexadas.
  employeeNewModal: EmployeeNewModalComponent;

  @ViewChild('employeeEditModal')
  employeeEditModal: EmployeeEditModalComponent;

  constructor(public employeeService:EmployeeService) {
    this.employees = this.employeeService.employees;
    // this.newEmployeeAdded = {name:'',salary:0}; - Usando notação newEmployee?.name check exists
  }

  ngOnInit(): void {
  }

  getSalaryColor(employee: Employee){
    return employee.salary > 1000 ? 'green' : 'black';
  }

  showNewEmployeeModal(employee:Employee){
    this.employeeService.employeeEdit = employee;
    this.employeeNewModal.show();
  }

  showEditEmployeeModal(employee:Employee){

    // this.employeeService.employeeEdit = employee;
    this.editEmployee = employee;
    this.employeeEditModal.show();
  }

  onNewEmployee(employee: Employee){
    this.newEmployeeAdded = employee;
    this.showMessageSuccess = true;
  }

  onEditEmployee(employee: Employee){
    this.newEmployeeAdded = employee;
    this.showMessageSuccess = true;
  }
}
