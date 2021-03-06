import { Component, OnInit } from '@angular/core';
import { DrawService } from '../draw.service';

@Component({
  selector: 'app-example1',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss'],
  providers: [DrawService],
})
export class DrawComponent implements OnInit {

  constructor(public drawService: DrawService) { }

  ngOnInit() {
  }

}
