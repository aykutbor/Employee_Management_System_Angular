import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent{
employees:Employee[]=[];

constructor(private employeeService:EmployeeService, private router:Router){

}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  this.getEmployees(); 

}

  private getEmployees(){

    this.employeeService.getEmployeeList().subscribe(data=>{
      this.employees=data;
    });
  }


  updateEmployee(id:number){

    this.router.navigate(['update-employee',id]);

  }


  viewEmployee(id:number){
    this.router.navigate(['employee-details',id]);
  }





  deleteEmployee(id:number){

    this.employeeService.deleteEmployeeById(id).subscribe(data=>{

      console.log(data);
      this.getEmployees();
    })
  }

}
