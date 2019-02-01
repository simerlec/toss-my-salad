import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { arrowIcon } from 'src/app/icons/icons';

@Component({
  selector: 'app-north-panel',
  templateUrl: './north-panel.component.html',
  styleUrls: ['./north-panel.component.scss'],
})
export class NorthPanelComponent implements OnInit {
  initDone = false;
  _showNorthPanel = false;
  @Input() set showNorthPanel(value: boolean) {
    if (!this.initDone) {
      this.initDone = true;
      return;
    }
    this._showNorthPanel = value;
  }
  @Output() toggleNorthPanel = new EventEmitter();
  arrowIcon: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    console.log(this.initDone);
    console.log(this._showNorthPanel);
    this.arrowIcon = this.sanitizer.bypassSecurityTrustHtml(arrowIcon());
  }
}
