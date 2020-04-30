import { Injectable } from '@angular/core';

export interface Employee
{
  name: string;
  salary: number;
  bonus?:number;
}

/*Service ou ServiceShare*/
@Injectable({
  providedIn: 'root' // Elimina a necessidade de importar no NgModule no metadados Providers
})
export class EmployeeService {

  employeeEdit: Employee;

  private _employees: Array<Employee> = [
    {name:"Cheap", salary:1000},
    // {name:"Expansive", salary:10001},
  ];

  constructor() { }

  addEmployee(employee: Employee){

    this._employees.push(employee);
  }

  get employees(){
    return this._employees;
  }
}
