import {Component, ElementRef, HostListener, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "../top-bar/top-bar.component";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-bar-element',
  templateUrl: './bar-element.component.html',
  styleUrls: ['./bar-element.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('open', style({
        height: '*',
        opacity: 1,
      })),
      state('closed', style({
        height: 0,
        opacity: 0,
      })),
      transition('closed <=> open', [
        animate('0.15s ease-in-out')
      ])
    ])
  ]
})
export class BarElementComponent implements OnInit {

  @Input() title: string = '';
  @Input() items: MenuItem[] = [];
  isOpen = false;
  darkOverlay: HTMLElement | undefined;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.darkOverlay = document.createElement('div');
      this.darkOverlay.className = 'dark-overlay';
      document.body.appendChild(this.darkOverlay);
      this.darkOverlay.classList.add('show-transition');
      document.addEventListener('click', this.handleDocumentClick);
    } else {
      document.removeEventListener('click', this.handleDocumentClick);
      this.darkOverlay!.remove();
    }
  }

  get menuState() {
    return this.isOpen ? 'open' : 'closed';
  }

  handleDocumentClick = (event: MouseEvent) => {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.toggleMenu();
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isOpen) {
      this.toggleMenu();
    }
  }

}
