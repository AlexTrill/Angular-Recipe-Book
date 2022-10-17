import { Component } from '@angular/core';
import { NgModule } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';
  link : string = "";
  
  onNavigation(feature : string){
    this.loadedFeature = feature;

  }

 
}

