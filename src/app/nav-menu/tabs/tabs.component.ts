import { Component, OnInit } from '@angular/core';
import { TabsService } from '../tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  providers: [TabsService],
})
export class TabsComponent implements OnInit {
  tabs = [{
    text: '例子1',
    link:  '/example1'
  }, {
    text: '例子2',
    link:  '/example2'
  }];

  constructor(public tabsService: TabsService) { }

  ngOnInit() {
  }

  getOffsetX(index): number {
    return index * ( this.tabsService.tabWidth + this.tabsService.tabGutter );
  }

  getGlobalOffsetX(): number {
    return (
      this.tabsService.svgWidth
      - this.tabs.length * (this.tabsService.tabWidth + this.tabsService.tabGutter)
      - this.tabsService.tabGutter
    ) / 2;
  }
}
