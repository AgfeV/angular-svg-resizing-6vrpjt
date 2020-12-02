import { Component,AfterViewInit,OnInit } from '@angular/core';
import * as d3 from "d3";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.svg',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit,OnInit  {
  name = 'Angular';
  ngOnInit() {

  }
  ngAfterViewInit() {
  var svg = d3.select("svg")
 .call(d3.zoom().on("zoom", function () {
    svg.attr("transform", d3.event.transform)
 }))
 .append("g")
  }
}
