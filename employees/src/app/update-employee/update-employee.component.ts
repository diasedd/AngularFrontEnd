import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number=0;  
  employee:Employee =new Employee();
  constructor(private empService:EmployeeServiceService, private actRout:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.actRout.snapshot.params['id'];
    this.empService.getEmployeeById(this.id).subscribe(
      data=>this.employee=data,
      error=>console.log(error)
    );
  }

  onSubmit() {
    this.empService.updateEmployee(this.id, this.employee).subscribe(data =>{
      console.log(data)},
      error=>console.log(error)
    );
    console.log(this.id);
    console.log(this.employee);
    this.goToEmployeeList();
  }

  goToEmployeeList() {
    this.router.navigate(['/employee-list']);
 }

}
