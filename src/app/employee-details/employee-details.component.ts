import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {

  id:number=0;
  employee:Employee=new Employee();

  constructor(private route:ActivatedRoute, private employeeServices:EmployeeService){}


  ngOnInit():void{

    this.id=this.route.snapshot.params['id'];

    this.employeeServices.getEmployeeById(this.id).subscribe(data=>{

      this.employee=data;
    })
  }

}
