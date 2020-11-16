import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  employee = {
    first_name: '',
    last_name: '',
    age: '',
    phone_number: '',
  };
  submitted = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

  saveEmployee(): void {
    const data = {
      first_name: this.employee.first_name,
      last_name: this.employee.last_name,
      age: this.employee.age,
      phone_number: this.employee.phone_number,
    };

    this.employeeService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
