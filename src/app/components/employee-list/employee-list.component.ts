import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  employees: any;
  currentEmployee = null;
  title = '';
  headers = ['First Name', 'Last Name', 'Age', 'Phone Number', 'Action'];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getAll().subscribe(
      (data) => {
        this.employees = data;

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchTitle(): void {
    this.employeeService.findByTitle(this.title).subscribe(
      (data) => {
        this.employees = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setActiveEmployee(employee): void {
    this.currentEmployee = employee;
  }

  removeAllEmployees(): void {
    this.employeeService.deleteAll().subscribe(
      (response) => {
        console.log(response);
        this.getEmployees();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
