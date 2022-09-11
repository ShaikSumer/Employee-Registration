import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeResponseDto } from '../employee-response-dto';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Array<EmployeeResponseDto>=[];
  employeeService: any;
 
  
  constructor( employeeService: EmployeeService,private router:Router ) {
    this.employeeService=employeeService;
   }

  ngOnInit(): void {
    
    this.getEmployees();

  }

  getEmployees(){
    this.employeeService.getEmployees().subscribe((data:any) =>{
      console.log("details----------"+data);
      this.employeeList= data;
      console.log("details----------"+this.employeeList);
      
    });

  }

  Employee_registration(){
    this.router.navigate([`${'employeeRegistration'}`]);
  }

  
  
}
