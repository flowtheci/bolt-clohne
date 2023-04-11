import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bar-element',
  templateUrl: './bar-element.component.html',
  styleUrls: ['./bar-element.component.scss']
})
export class BarElementComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
