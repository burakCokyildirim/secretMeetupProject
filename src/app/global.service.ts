import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public meetings = [
    {
      id: 1,
      title: "deneme",
      description: "açıklama",
      createdBy: "Semih"
    }
  ];

  public authUser = {
    isLoggedIn: false,
    email: null,
    fullname: null
  };

  constructor() { }

  getMeeting(id) {
    let meeting = null;
    this.meetings.forEach(e => {
      if (e.id == id)
        meeting = e;
    });
    return meeting;
  }
}
