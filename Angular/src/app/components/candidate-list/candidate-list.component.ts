import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidates } from 'src/app/common/candidates';
import { CandidareServiceService } from 'src/app/services/candidare-service.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  candidatess:Candidates[];
 
  

  constructor(private candidatesservice:CandidareServiceService,private route:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.getAllCandidates();
  }
  
getAllCandidates()
{
  this. candidatesservice.getAllCandidates().subscribe(data=>
    {
      console.log(data);
      this.candidatess=data;
    })
}
addCandidateForm()
{
this.route.navigateByUrl("/candidateform");   //appmodule.ts   candidate-form
}
updateCandidate(candidateId:number)
{
  this.route.navigateByUrl("/editcandidate/"+candidateId); //appmodule.ts   candidate-form(old data)
}
deleteCandidate(candidateId:number)
{
  if(confirm("Do you want to delete ? "))
  {
    this.candidatesservice.deleteCandidate(candidateId).subscribe(data=>
      {
        console.log("deleted");
        //reloading
        this.getAllCandidates();
      })
  }
}
back5(){
  this.route.navigateByUrl("/candichoice");
}
}
