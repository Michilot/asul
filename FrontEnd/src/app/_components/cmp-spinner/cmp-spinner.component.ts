import { Component } from '@angular/core';


@Component({
  selector: 'block-ui',
  templateUrl: './cmp-spinner.component.html',
  styleUrls: ['./cmp-spinner.component.scss']
})


export class CmpSpinnerComponent {
  /*  @Input() private blockuiMessageClass;*/
  private state: any;

  constructor() {
    this.state = { message: 'Cargando ...' };
  }

}
