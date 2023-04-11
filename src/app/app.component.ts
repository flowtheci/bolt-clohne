import {Component, OnInit} from '@angular/core';
import {TranslationLoaderService} from "../services/translation-loader.service";
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bolt-clone';

  constructor(private translate: TranslateService, private titleService: Title) {

  }

  ngOnInit() {
    this.translate.use('ee');
    this.titleService.setTitle('Telli sõit, 24/7 | Bolt');
  }
}
