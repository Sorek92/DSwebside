import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // english nav, if polish change
  title = {
    about: "about",
    school: "school",
    experiance: "experiance",
    skills: "skills",
    projects: "projects",
    interests: "interests",
    contact: "contact"

  }

  constructor() { }

  ngOnInit() {
  }

}
