import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  chosenLang: LangOptions = LangOptions.EE;

  constructor() { }

  ngOnInit(): void {
  }

  changeToEstonian() {
    this.chosenLang = LangOptions.EE;
  }

  changeToEnglish() {
    this.chosenLang = LangOptions.EN;
  }

  changeToRussian() {
    this.chosenLang = LangOptions.RU;
  }

}

enum LangOptions {
  EE = "Eesti keel", EN = "English", RU = "Russian",
}


