import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data, error } from 'jquery';
import { Voters } from 'src/app/common/voters';
import { CandidareServiceService } from 'src/app/services/candidare-service.service';

@Component({
  selector: 'app-voters-login',
  templateUrl: './voters-login.component.html',
  styleUrls: ['./voters-login.component.css']
})
export class VotersLoginComponent implements OnInit {
  voterss:Voters=new Voters(1001,"","","","","");
  constructor(private candidatesservice:CandidareServiceService,private route:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
   
  }
  onSubmit(){
    console.log(this.voterss);
   this.candidatesservice.loginVoters(this.voterss).subscribe(data=>{
    alert("login succesfully")
   },
   )
    // window.alert("voter loged in");
    this.route.navigateByUrl("/votings");
  }
  voterregister1()
{
  this.route.navigateByUrl("/votersregister");
}

back2(){
  this.route.navigateByUrl("/");
}
}
// getCandidateById()
// {
//   const candidateId = + this.activeRoute.snapshot.paramMap.get("id");
//   console.log(candidateId);
//   if(candidateId>0)
//   {
//     this.editable=true;
//   this.candidatesservice.getCandidateById(candidateId).subscribe(data=>{this.candidatess=data});
//   }
// }
// @PostMapping("/login")
// 	public ResponseEntity<?> loginVoters( @RequestBody Voters votersdata){
// 		Voters voterss = votdao.findByvotersId(votersdata.getVoters_ID());
// 		if(voterss.getPassword().equals(votersdata.getPassword()))
// 			return ResponseEntity.ok(voterss);
		
// 		return (ResponseEntity<Voters>) ResponseEntity.internalServerError();
// 	}