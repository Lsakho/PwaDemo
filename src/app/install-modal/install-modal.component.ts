import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-install-modal',
  templateUrl: './install-modal.component.html',
  styleUrls: ['./install-modal.component.scss']
})
export class InstallModalComponent {
  constructor(

    public readonly modalCtrl: ModalController
  ){}

}
