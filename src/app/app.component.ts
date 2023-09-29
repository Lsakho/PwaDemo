import { Component, OnInit } from '@angular/core';
import { InstallModalComponent } from './install-modal/install-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly modalCtrl: ModalController
  ) { }
  title = 'PwaDemo';

  ngOnInit(): void {
    this.displayInstallNotif()
  }
  async displayInstallNotif() {
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    }
    const isStandaloneMode = () => (
      'standalone' in (window as any).navigator
    ) && ((window.navigator as any).standalone
      );
      console.log(isIos(),!isStandaloneMode());
      
    if (isIos() && !isStandaloneMode()) {
      const m = await this.modalCtrl.create({
        component: InstallModalComponent,
        initialBreakpoint: 0.50
      });
      m.present()
    }
  }
}
