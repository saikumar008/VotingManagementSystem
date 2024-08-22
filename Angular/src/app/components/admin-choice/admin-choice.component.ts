import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidareServiceService } from 'src/app/services/candidare-service.service';

@Component({
  selector: 'app-admin-choice',
  templateUrl: './admin-choice.component.html',
  styleUrls: ['./admin-choice.component.css']
})
export class AdminChoiceComponent implements OnInit {

  constructor(private route:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  

  choice1()
  {
    this.route.navigateByUrl("/candidates");
  }
  choice2()
  {
    this.route.navigateByUrl("/voters");
  }
  choice3()
  {
    this.route.navigateByUrl("/votinglist");
  }
  back3(){
    this.route.navigateByUrl("/login");
  }
}
