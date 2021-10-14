import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private employeeSerice:EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
  }

 onSubmit():void {
    console.log(this.employee.name);
    console.log(this.employee.designation);
    console.log("submitted");
    this.saveEmployee();
 }

 saveEmployee() {
  this.employeeSerice.createEmployee(this.employee).subscribe(
    data=> {
      console.log(data);
    },
    error => console.log (error)
  );
  this.goToEmployeeList();
 }

 goToEmployeeList() {
    this.router.navigate(['/employee-list']);
 }

}
