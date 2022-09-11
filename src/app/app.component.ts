import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeRequestDto } from './employee-request-dto';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  router: any;

  constructor(router : Router){
    this.router=router;
  }


  ngOnInit(): void {
  this.router.navigate([`${'employeeRegistration'}`]);
  
  }

 
  
}
