import { Component, OnInit } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  content = {};

  contentPL = {
    title: 'Witam na mojej stronie',
    text: "Cześć, jestem Dominik. Mam 26 lat. Studiowałem na Politechnice Rzeszowskiej. Moje pierwsze kroki w programowaniu zacząłem w c ++. Później nauczyłem się technologii: pascal, php, c, java, sql, html, css. Teraz próbuję dowiedzieć się więcej o typescript(Angular), javascript (nodejs) i css (sass).",
    questionnaire: 'Proszę kliknąć jeśli spodobał Ci się wygląd strony'
  }


  contentEN = {
    title: 'Welcome on my webside',
    text: "Hi, I'm Dominik. I'm 26 years old. I was studying on Rzeszow University of Technology. My first steps in programming I started in c++. Later I learned technologies: pascal, php, c, java, sql, html, css.  Now I try learn more about typescript(Angular), javascript(nodejs) and css(sass).",
    //text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    questionnaire: 'Please click if you like thats web design'
  }


  constructor() { 
    this.content = this.contentEN;
  }

  ngOnInit() {
  }

}
