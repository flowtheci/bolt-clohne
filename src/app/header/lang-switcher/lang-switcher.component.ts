import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-lang-switcher',
    templateUrl: './lang-switcher.component.html',
    styleUrls: ['./lang-switcher.component.scss']
})
export class LangSwitcherComponent implements OnInit {

  chosenLang: LangOptions = LangOptions.EE;

  @Input() hasPadding: boolean = false;

    constructor(private translateService: TranslateService) {
    }

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

export enum LangOptions {
  EE = "Eesti keel", EN = "English", RU = "Русский",
}

