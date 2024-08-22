import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  login1()
  {
    this.route.navigateByUrl("/login");
  }
  login2()
  {
    this.route.navigateByUrl("/voterslogin");
  }

}
