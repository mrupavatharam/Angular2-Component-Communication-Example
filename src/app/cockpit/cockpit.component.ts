import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  newServerDetails= {
    newServerName:"",
    newServerDescription:""
  };
  
  @Output() serverCreated = new EventEmitter<{newServerName:string,newServerDescription:string}>();
  @Output() blueprintServerCreated= new EventEmitter<{newServerName:string,newServerDescription:string}>();
  
  onAddServer(){
     this.serverCreated.emit({'newServerName':this.newServerDetails.newServerName,"newServerDescription":this.newServerDetails.newServerDescription});
     this.clearDetails();
  }

  onAddBpServer(){
    this.blueprintServerCreated.emit({'newServerName':this.newServerDetails.newServerName,"newServerDescription":this.newServerDetails.newServerDescription});
    this.clearDetails();    
  }

  clearDetails(){
    this.newServerDetails= {
      newServerName:"",
      newServerDescription:""
    };
  }
 
}
