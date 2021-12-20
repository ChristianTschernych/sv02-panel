import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})


export class LandingComponent implements OnInit {

  links = [
    {name:"Etherpad", link:"http://sv02/", content:"Kollaborativer echtzeit Texteditor.",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Etherpad_logo.svg/225px-Etherpad_logo.svg.png"},
    {name:"MAX!", link:"http://192.168.1.100:31657", content:"Web Gui zur steuerung der Thermostate.",img:"https://www.eq-3.de/downloads/eq3/header/produkte/header_produkte_max_logo.png"},
    {name:"Gesthuysen Doku", link:"http://192.168.1.5:8080/dokuwiki/doku.php?id=start", content:"Die Hauseigene Dokumentation im Wikipedia Stil.", img:"/../static/logo.png"}
  ]

  constructor() {
    
   }

  ngOnInit(): void {
    
    
  }
  public goTo(link:string) {
    window.location.href = link
  }

  

}
