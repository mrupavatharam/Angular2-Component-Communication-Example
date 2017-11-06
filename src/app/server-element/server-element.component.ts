import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  isTrue:boolean = true;
  @Input() server : {name:string, description:string, isBluePrint:boolean};
  constructor() { }

  ngOnInit() {
  }

}
