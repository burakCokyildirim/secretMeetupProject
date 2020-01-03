import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, app } from 'firebase/app';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""

  constructor(public afAuth: AngularFireAuth, public navcontroller: NavController) { }

  ngOnInit() {
  }

  async login(){
    const {username, password} = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + "@kocaeli.edu.tr", password)
      console.log(res)
      if (res.user.uid != undefined){
        alert("Login başarılı")
        this.navcontroller.navigateRoot("home")
        
      }
    } catch (error) {
      alert(error)
      console.dir(error)
      if(error === "auth/user-not-found"){
        alert("User not found")
        console.log("User not found")
      }
    }
  }

  registerPage() {
    this.navcontroller.navigateForward("register")
  }
}
