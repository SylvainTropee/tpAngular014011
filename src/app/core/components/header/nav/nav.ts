import {Component, input, Input, output} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [
    RouterLink
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  username = input.required<string>()
  logoutEvent = output<string>() // new EventEmitter<void>()

  public logout() {
    this.logoutEvent.emit("coucou tout court");
  }
}
