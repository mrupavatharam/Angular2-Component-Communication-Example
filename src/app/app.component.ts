import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements = [{'name':"BluePrint Server",'description':"Blue Print Server is a Virtual Server",'isBluePrint':true},{'name':"Test Server1",'description':"fast server",'isBluePrint':false}];

  onServerAdded(serverData:{newServerName:string,newServerDescription:string}) {
    this.serverElements.push({
      'name':serverData.newServerName,
      'description':serverData.newServerDescription,
      'isBluePrint':false
    })

  }

  onBluePrintAdded(bpServerData:{newServerName:string,newServerDescription:string}){

    this.serverElements.push({
      'name':bpServerData.newServerName,
      'description':bpServerData.newServerDescription,
      'isBluePrint':true
    })

  }

}
