import { Component, Input, OnInit } from '@angular/core';
import { TabsService } from '../tabs.service';

@Component({
  selector: 'g[app-tab]',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() tab;

  constructor(public tabsService: TabsService) { }

  ngOnInit() {
  }

  getStyle() {
    return {
      width: this.tabsService.tabWidth + 'px',
      height: this.tabsService.tabHeight + 'px',
    };
  }

}
