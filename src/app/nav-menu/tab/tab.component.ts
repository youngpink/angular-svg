import { Component, Input, OnInit } from '@angular/core';
import { TabsService } from '../tabs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'g[app-tab]',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() tab;

  constructor(
    public tabsService: TabsService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  getStyle() {
    return {
      width: this.tabsService.tabWidth + 'px',
      height: this.tabsService.tabHeight + 'px',
    };
  }

  updateRouter() {
    this.router.navigate([this.tab.link]);
  }

  isActive(): boolean {
    return window.location.href.includes(this.tab.link);
  }

}
