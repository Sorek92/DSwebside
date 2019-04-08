import { Component, OnInit, HostListener} from '@angular/core';

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
  
  constructor() {}

  ngOnInit() {
  }

  @HostListener('document:click', ['$event.target'])
    public onClick(e) {

        var burger = document.querySelector('.burger');
        const clickedInsideBurger = burger.contains(e);

        if(!document.querySelector('.clickMenu')){
            
          if(clickedInsideBurger){

            this.addClass('on-wrapper','.nav-wrapper');
            this.addClass('clickMenu','.burger');
          }

        }else{

          this.removeClass('on-wrapper','.nav-wrapper');
          this.removeClass('clickMenu','.burger');
          
        }
        
  }

  addClass(nameClass, place){
    var nav = document.querySelector(place);
        nav.classList.add(nameClass);
        
  }
  
  removeClass(nameClass, place){
    var nav = document.querySelector(place);
        nav.classList.remove(nameClass);
  }


}
