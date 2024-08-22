import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/common/admin';
import { CandidareServiceService } from 'src/app/services/candidare-service.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {
admin:Admin=new Admin(1," "," "," "," "," ");
constructor(private candidatesservice:CandidareServiceService,private route:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit() : void
  {
    console.log(this.admin);
    this.candidatesservice.saveAdmin(this.admin).subscribe(data=>
      console.log(data));
      this.route.navigateByUrl("");
    window.alert("registration successful");
  }
  sign2(){
    this.route.navigateByUrl("/login");
  }

}
