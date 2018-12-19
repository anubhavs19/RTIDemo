import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  page = 1;
  loaded = false;
  users = [];
  searchTerm = "";

  constructor(public navCtrl: NavController, public user: UserProvider) {

  }

  ionViewDidLoad() {
    this.loadUsers();
  }
  loadMoreUsers() {
    this.page++;
    this.loadUsers();
  }

  loadUsers() {
    this.user.getUsers(this.page).subscribe((resp: any) => {
      console.log(resp);
      this.loaded = true;
      this.users = this.users.concat(resp.results);
    }, (err) => {
      console.log(err);
      this.loaded = true;
    });
  }

}
