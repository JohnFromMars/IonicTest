import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private loadingController: LoadingController) { }

  ngOnInit() {
  }


  public onClick() {
    var date = document.getElementById("a");
    console.log(date);
  }
}
