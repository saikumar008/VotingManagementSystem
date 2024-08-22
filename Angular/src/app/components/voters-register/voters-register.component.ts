import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voters } from 'src/app/common/voters';
import { CandidareServiceService } from 'src/app/services/candidare-service.service';

@Component({
  selector: 'app-voters-register',
  templateUrl: './voters-register.component.html',
  styleUrls: ['./voters-register.component.css']
})
export class VotersRegisterComponent implements OnInit {
voterss:Voters=new Voters(100001," "," "," "," "," ");
  constructor(private candidatesservice:CandidareServiceService,private route:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit() : void
  {
    console.log(this.voterss);
    this.candidatesservice.saveVoters(this.voterss).subscribe(data=>
      console.log(data));
      this.route.navigateByUrl("");
    window.alert("registration successful");
  }
  signin()
  {
    this.route.navigateByUrl("/voterslogin");
  }
}
