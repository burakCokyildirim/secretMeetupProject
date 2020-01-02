import { Component } from '@angular/core';
import { SQLService } from '../services/sql/sql.service';
import { GlobalService } from '../global.service';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  portals = [];
  meetings = [];

  constructor(
    private sqlService: SQLService,
    private globalService: GlobalService,
    private navCtrl: NavController) {
    this.meetings = this.globalService.meetings;

    /*this.sqlService.getDbState().subscribe(ready => {
      if (ready) {
        //this.getPortals();
      }
    });*/
  }

  goMeetingDetail(meetingId: number) {
    this.navCtrl.navigateForward('/meeting-detail/' + meetingId);
  }

  getPortals() {
    this.sqlService.db.executeSql('SELECT * FROM portal').then((rs: any) => {
      this.sqlService.asArray(rs).then((list) => {
        this.portals = list;
        console.log(this.portals);
      });
    });
  }
}
