import {Component, OnInit} from '@angular/core';
import {NodesService} from "./core/nodes/nodes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public nodeService: NodesService) {
  }

  ngOnInit() {
    this.nodeService.initNodes();
  }
}
