import { Component, OnInit } from '@angular/core';
import { DrawService } from '../draw.service';

@Component({
  selector: 'g[app-background]',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  constructor(public drawService: DrawService) { }

  ngOnInit() {
  }

}
