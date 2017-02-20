import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search-page/search-page';
 
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public nav: NavController) {
 
  }
 
  openSearch(){
    this.nav.push(SearchPage);
  }
 
}