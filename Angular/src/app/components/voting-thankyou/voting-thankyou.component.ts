import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voting-thankyou',
  templateUrl: './voting-thankyou.component.html',
  styleUrls: ['./voting-thankyou.component.css']
})
export class VotingThankyouComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
logout(){
  this.route.navigateByUrl("");
}
}
