import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[]=[];
  constructor(private empService:EmployeeServiceService, private route:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.empService.getEmployeeList().subscribe(
      data=> {
        this.employees =data;
      }
    )
  }

  editEmployee(id:number) {
    this.route.navigate(['update-employee',id]);
  }

  removeEmployee(id:number){
      this.empService.deleteEmployeeById(id).subscribe(
        data=>console.log(data),
        error=>console.log(error)
      );
      this.getEmployees();
   }
}
