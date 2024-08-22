import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidates } from 'src/app/common/candidates';
import { CandidareServiceService } from 'src/app/services/candidare-service.service';

@Component({
  selector: 'app-voters-president',
  templateUrl: './voters-president.component.html',
  styleUrls: ['./voters-president.component.css']
})
export class VotersPresidentComponent implements OnInit {
  candidates:Candidates[];
  constructor(private candidatesservice:CandidareServiceService,private route:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllCandidates();
  }
  getAllCandidates()
{
  this. candidatesservice.getAllCandidates().subscribe(data=>
    {
      console.log(data);
      this.candidates=data;
    })
}


}
