import { Component } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ng-upgrade-example-app';

  constructor(private upgrade: UpgradeModule) { }

  ngOnInit() {
    this.upgrade.bootstrap(document.body, ['ng1App']);
  }
}
