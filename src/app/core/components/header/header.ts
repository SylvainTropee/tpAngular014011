import {Component} from '@angular/core';
import {Nav} from './nav/nav';
import {AuthService} from '../../services/auth-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    Nav
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  public username: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.username = this.authService.getUsername();
  }

  public logout(message : string) {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }

}
