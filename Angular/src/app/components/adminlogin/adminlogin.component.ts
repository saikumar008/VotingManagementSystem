import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/common/admin';
import { CandidareServiceService } from 'src/app/services/candidare-service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
admin:Admin=new Admin(1," "," "," "," "," ");
  constructor(private candidatesservice:CandidareServiceService,private route:Router,private activeRoute:ActivatedRoute) { }
  

  ngOnInit(): void {
  }

onSubmit(){
  console.log(this.admin);
  window.alert("admin loged in");
  this.route.navigateByUrl("/candichoice");
}
// signin(){
//   // console.log(this.admin);
//   // window.alert("admin loged in");
//   // this.route.navigateByUrl("/candidates"); 
// }
  
register1()
{
  this.route.navigateByUrl("/register");
}
back1(){
  this.route.navigateByUrl("/");
}
}
