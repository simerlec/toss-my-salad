import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  Renderer2,
} from '@angular/core';
import { TimelineMax } from 'gsap';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { saladIcon, arrowIcon } from './icons/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'toss-my-salad';
  @ViewChild('logo') logoRef: ElementRef;
  @ViewChild('northPanel') northPanel: ElementRef;
  @ViewChild('southPanel') southPanel: ElementRef;
  @ViewChild('eastPanel') eastPanel: ElementRef;
  @ViewChild('westPanel') westPanel: ElementRef;
  saladIcon: SafeHtml;
  arrowIcon: SafeHtml;

  constructor(private sanitizer: DomSanitizer, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.saladIcon = this.sanitizer.bypassSecurityTrustHtml(saladIcon());
    this.arrowIcon = this.sanitizer.bypassSecurityTrustHtml(arrowIcon());
    // const tl = new TimelineMax();
    // tl.to(this.logoRef.nativeElement, 1, { x: 100 })
    //   .to(this.logoRef.nativeElement, 1, { x: -100 })
    //   .to(this.logoRef.nativeElement, 1, { x: -0 });
  }

  toggle() {
    this.renderer.removeClass(this.logoRef.nativeElement, 'logo-animation');
    this.renderer.addClass(this.logoRef.nativeElement, 'logo-rotate');
    setTimeout(() => {
      this.renderer.removeClass(this.logoRef.nativeElement, 'logo-rotate');
      this.renderer.addClass(this.logoRef.nativeElement, 'logo-animation');
    }, 1000);
  }

  toggleNorthPanel() {
    if (!this.northPanel.nativeElement.classList.contains('northPanel--show')) {
      this.renderer.removeClass(
        this.northPanel.nativeElement,
        'northPanel--hide',
      );
      this.renderer.addClass(this.northPanel.nativeElement, 'northPanel--show');
    } else {
      this.renderer.removeClass(
        this.northPanel.nativeElement,
        'northPanel--show',
      );
      this.renderer.addClass(this.northPanel.nativeElement, 'northPanel--hide');
    }
  }

  toggleSouthPanel() {
    if (!this.southPanel.nativeElement.classList.contains('southPanel--show')) {
      this.renderer.removeClass(
        this.southPanel.nativeElement,
        'southPanel--hide',
      );
      this.renderer.addClass(this.southPanel.nativeElement, 'southPanel--show');
    } else {
      this.renderer.removeClass(
        this.southPanel.nativeElement,
        'southPanel--show',
      );
      this.renderer.addClass(this.southPanel.nativeElement, 'southPanel--hide');
    }
  }

  toggleEastPanel() {
    if (!this.eastPanel.nativeElement.classList.contains('eastPanel--show')) {
      this.renderer.removeClass(
        this.eastPanel.nativeElement,
        'eastPanel--hide',
      );
      this.renderer.addClass(this.eastPanel.nativeElement, 'eastPanel--show');
    } else {
      this.renderer.removeClass(
        this.eastPanel.nativeElement,
        'eastPanel--show',
      );
      this.renderer.addClass(this.eastPanel.nativeElement, 'eastPanel--hide');
    }
  }

  toggleWestPanel() {
    if (!this.westPanel.nativeElement.classList.contains('westPanel--show')) {
      this.renderer.removeClass(
        this.westPanel.nativeElement,
        'westPanel--hide',
      );
      this.renderer.addClass(this.westPanel.nativeElement, 'westPanel--show');
    } else {
      this.renderer.removeClass(
        this.westPanel.nativeElement,
        'westPanel--show',
      );
      this.renderer.addClass(this.westPanel.nativeElement, 'westPanel--hide');
    }
  }
}
