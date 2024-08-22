import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voters } from 'src/app/common/voters';
import { CandidareServiceService } from 'src/app/services/candidare-service.service';

@Component({
  selector: 'app-voters-list',
  templateUrl: './voters-list.component.html',
  styleUrls: ['./voters-list.component.css']
})
export class VotersListComponent implements OnInit {

  voters:Voters[];
 
  

  constructor(private candidatesservice:CandidareServiceService,private route:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.getAllVoters();
  }
  back4(){
    this.route.navigateByUrl("/candichoice");
  }
  
getAllVoters()
{
  this. candidatesservice.getAllVoters().subscribe(data=>
    {
      console.log(data);
      this.voters=data;
    })
}
}