import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  currentEmployee = null;
  message = '';
  emailSent = false;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getEmployee(this.route.snapshot.paramMap.get('id'));
  }

  getEmployee(id): void {
    this.employeeService.get(id).subscribe(
      (data) => {
        this.currentEmployee = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateEmployee(): void {
    this.employeeService
      .update(this.currentEmployee.id, this.currentEmployee)
      .subscribe(
        (response) => {
          console.log(response);
          this.message = 'Employee has been updated successfully';
        },
        (error) => {
          this.message = 'Update failed';
          console.log(error);
        }
      );
  }

  deleteEmployee(): void {
    this.employeeService.delete(this.currentEmployee.id).subscribe(
      (response) => {
        alert('Employee deleted');
        this.router.navigate(['/employees']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateEmailStatus(): void {
    this.emailSent = !this.emailSent;
  }
}
