import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

import { TabComponent } from './tab.component';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements AfterContentInit {
  @Input('defatltActiveTab') defatltActiveTab;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Output() onTabsSelected: EventEmitter<any> = new EventEmitter<any>();
  tabNames = ['model','types', 'purchases', 'contracts', 'devices', 'import', 'reviewExceptions'];

  constructor(private router: Router) {
  }
 
  ngAfterContentInit() {
    let tabIndex = 0;
    let activeTabs = this.tabs.filter((tab, index)=>{
      if(tab.value === this.defatltActiveTab){
        tab.active = true; 
        tabIndex = index;   
      }
      return tab.active
    });
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    } else {
      this.selectTab(this.tabs['_results'][tabIndex])
    }
  }
  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach(tab => tab.active = false);
    tab.active = true;
    this.onTabsSelected.emit(tab);
  }
}
