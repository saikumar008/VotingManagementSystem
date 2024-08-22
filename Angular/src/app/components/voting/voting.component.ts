import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidates } from 'src/app/common/candidates';
import { Voters } from 'src/app/common/voters';
import { Votes } from 'src/app/common/votes';
import { CandidareServiceService } from 'src/app/services/candidare-service.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  candidates:Candidates[];
  votess:Votes=new Votes(0,0,0,0);
  votes:Votes[];
  voters:Voters[];
  max_votes=0;
  
  counter(){
    this.max_votes++;
   
      if(confirm("Do you want to vote to this candidate"))
      {
      if(this.max_votes==1){
        this.candidatesservice.saveVotes(this.votess).subscribe(data=>
          console.log(data));
      window.alert("voted");

      // this.route.navigateByUrl("");
      }
    }
  }
  selected(){
    
    window.alert("candidate selected please! proceed to vote");
    
  }
  constructor(private candidatesservice:CandidareServiceService,private route:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllCandidates();
    // this.getloginVoters();
  }
  getAllCandidates()
{
  this. candidatesservice.getAllCandidates().subscribe(data=>
    {
      console.log(data);
      this.candidates=data;
    })
}
onSubmit(){
  console.log(this.votess);
  this.candidatesservice.saveVotes(this.votess).subscribe(data=>
    console.log(data));
    // this.route.navigateByUrl("/candidates");
    window.alert("Voted");
    this.route.navigateByUrl("votingthankyou");
  }
//   getloginVoters()
// {
//   this. candidatesservice. getloginVoters().subscribe(data=>
//     {
//       console.log(data);
//       this.voters=data;
//     })
// }
 
}



