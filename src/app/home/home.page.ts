import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public actionSheetController: ActionSheetController, public alertController: AlertController) { }

  /**
   * action sheet function for home page action sheet button and alert function 
   */
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Test action sheet',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        icon: 'trash',
        handler: () => {
          console.log('U click cancel');
        }
      }, {
        text: 'Hello',
        role: 'destructive',
        icon: 'add',
        handler: () => {
          console.log('U add me');
        }
      }]});

    await actionSheet.present();
  }

  /**
   * alert function for home page alert button 
   */
  async presentAlert() {
    const alert = await this.alertController.create(
      {
        header: 'Test Alert',
        subHeader: 'Subtitle for test',
        message: 'This is a test alert message.',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('click cancel');
            }
          },
          {
            text: 'Second',
            handler: () => {
              console.log('secondary');
            }
          },
          {
            text: 'Open action sheet',
            handler: () => {
              console.log('open action sheet');
              this.presentActionSheet();
            }
          }
        ]});

    await alert.present();
  }

}
