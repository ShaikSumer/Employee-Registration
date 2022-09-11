import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeRequestDto } from '../employee-request-dto';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { EmployeeResponseDto } from '../employee-response-dto';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  

  msg:string="Data Uploaded";
  empService : EmployeeService;

  request: EmployeeRequestDto=new EmployeeRequestDto();
  response: EmployeeResponseDto=new EmployeeResponseDto();

  router: any;

  constructor(empService : EmployeeService,router : Router) {
    this.empService=empService;
    this.router=router;

   }

    title = 'RegistrationForm';
    registerform:any;


    employeeName:string =""; 
    gender: string="";
    email: string="";
    salary: number=0;
    yoj : String="";
    experience: number=0;
    jobRole: String="";
    address : String="";
    companyAddress:String="";
    location:String=""

    
    formdata:any;
    ngOnInit() { 
       this.formdata = new FormGroup({ 
        employeeName: new FormControl(""),
        gender: new FormControl(""),
        email: new FormControl(""),
        salary: new FormControl(""),
        yoj: new FormControl(""),
        experience: new FormControl(""),
        jobRole: new FormControl(""),
        address: new FormControl(""),
        companyAddress: new FormControl(""),
        location: new FormControl("")

       }); 
    } 
    onClickSubmit(data:any) {
      
      this.request.address=data.address;
      this.request.emailId=data.email;
      this.request.employeeName=data.employeeName;
      this.request.experience=data.experience;
      this.request.jobRole=data.jobRole;
      this.request.location=data.location;
      this.request.companyAddress=data.companyAddress;

      console.log("calling post");
      //create routing modulke.ts

      //this.route.navigateURL[/employeList];


      this.empService.doRegistration(this.request) .subscribe(data => {
      
        this.response = data;
        
      }, error => console.log(error));
   
      this.navigateToList();
    
    
    }

    navigateToList(){
      console.log("navigating");
      this.router.navigate([`${'employeeList'}`]);
    }
  

}
