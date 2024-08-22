import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidates } from 'src/app/common/candidates';
import { PositionName } from 'src/app/common/PositionName';
import { CandidareServiceService } from 'src/app/services/candidare-service.service';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent implements OnInit {

  candidatess:Candidates=new Candidates(0," "," "," ","",PositionName.president);
  constructor(private candidatesservice:CandidareServiceService,private route:Router,private activeRoute:ActivatedRoute) { }
  editable:boolean=false;
    ngOnInit(): void {
      this.activeRoute.paramMap.subscribe(()=>{this.getCandidateById()});
    }
    getCandidateById()
  {
    const candidateId = + this.activeRoute.snapshot.paramMap.get("id");
    console.log(candidateId);
    if(candidateId>0)
    {
      this.editable=true;
    this.candidatesservice.getCandidateById(candidateId).subscribe(data=>{this.candidatess=data});
    }
  }
  onSubmit()
  {
    if(this.editable)
    {
      
        this.candidatesservice.updateCandidate(this.candidatess).subscribe(data=>
        console.log(data));
        this.route.navigateByUrl("/candidates");
    }
    else{
    console.log(this.candidatess);
    this.candidatesservice.saveCandidates(this.candidatess).subscribe(data=>
      console.log(data));
      this.route.navigateByUrl("/candidates");
    }
  }
  }
  