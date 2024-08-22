import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidates } from 'src/app/common/candidates';
import { Votes } from 'src/app/common/votes';
import { CandidareServiceService } from 'src/app/services/candidare-service.service';
import { CandidateListComponent } from '../candidate-list/candidate-list.component';

@Component({
  selector: 'app-voting-list',
  templateUrl: './voting-list.component.html',
  styleUrls: ['./voting-list.component.css']
})
export class VotingListComponent implements OnInit {
  votes:Votes[];
  constructor(private candidatesservice:CandidareServiceService,private route:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllVotes();
    $(function(){
      $('#datatable-example').DataTable();
    });
    
    // this.getVoteDetails();

  }
  getAllVotes()
  {
    this. candidatesservice.getAllVotes().subscribe(data=>
      {
        console.log(data);
        this.votes=data;
      })
  }
  back5(){
    this.route.navigateByUrl("/candichoice");
  }

  searchText : string = '';

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
    }
    count = 0;
  getVoteDetails(){
   if( this. candidatesservice.getVoteDetails().subscribe(data=>
      {  
        this.votes[0];
      
        // console.log(data);
        // this.votes=data;
      })){
       
        console.log(this.count);
      }
  }
 
}
