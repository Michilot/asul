import { Component } from '@angular/core';

@Component({
   templateUrl: 'alerts.component.html'
})
export class AlertComponent {
   public alerts: any = [];
   constructor() { }

   public add(): void {
      this.alerts.push({
         type: 'info',
         msg: `This alert will be closed in 5 seconds (added: ${(new Date()).toLocaleTimeString()})`,
         timeout: 5000
      });
   }

}
