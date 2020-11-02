import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
})
export class TabComponent {
  @Input('tabTitle') title: string;
  @Input('tabValue') value: string;
  @Input() active = false;
}
