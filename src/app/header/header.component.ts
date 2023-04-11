import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  chosenLang: LangOptions = LangOptions.EE;

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
  }

  changeToEstonian() {
    this.chosenLang = LangOptions.EE;
    this.translateService.use('ee');
  }

  changeToEnglish() {
    this.chosenLang = LangOptions.EN;
    this.translateService.use('en');
  }

  changeToRussian() {
    this.chosenLang = LangOptions.RU;
    this.translateService.use('ru');
  }

}

enum LangOptions {
  EE = "Eesti keel", EN = "English", RU = "Russian",
}


