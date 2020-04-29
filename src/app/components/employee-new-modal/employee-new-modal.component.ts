import { Component, OnInit, ElementRef } from '@angular/core';
import { EmployeeService, Employee } from 'src/app/services/employee-service';

declare const $;

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.scss']
})
export class EmployeeNewModalComponent implements OnInit {

  employee: Employee;

  constructor(private element: ElementRef) {
    this.employee = {name:'',salary:0};
  }


  ngOnInit(): void {
  }

  show(){
    const divModal = this.getDivModal();
    $(divModal).modal('show');
  }

  getDivModal(): HTMLElement{
    const elementDOM:HTMLElement = this.element.nativeElement;
    return elementDOM.firstElementChild as HTMLElement;
  }
}
