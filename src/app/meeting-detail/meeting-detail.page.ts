import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-meeting-detail',
  templateUrl: './meeting-detail.page.html',
  styleUrls: ['./meeting-detail.page.scss'],
})
export class MeetingDetailPage implements OnInit {

  private meetingId;
  private meetingDetail;
  constructor(private route: ActivatedRoute, private navCtrl: NavController, private globalService: GlobalService) {
  }

  ngOnInit() {
    this.meetingDetail = this.globalService.getMeeting(this.route.snapshot.paramMap.get('id'));
    if (this.meetingDetail == null) {
      alert("Error!");
      this.navCtrl.pop();
      return;
    }
  }

}
