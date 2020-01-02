import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { NavController, AlertController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
  password: string = ""
  cpassword: string = ""


  constructor(public afAuth: AngularFireAuth, public navcontroller: NavController) { }

  ngOnInit() {
  }

  async register(){
    const {username, password, cpassword} = this
    
    if (password !== cpassword) {
      alert("Passords don't match.")
      console.error("Passords don't match.");
    }

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + "@kocaeli.edu.tr", password)
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
}
