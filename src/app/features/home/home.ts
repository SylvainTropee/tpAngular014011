import { Component } from '@angular/core';
import {AuthService} from '../../core/services/auth-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(
    private authService : AuthService,
    private router : Router
  ) {
  }

  public login(){
    this.authService.login("Michel")
    if(this.authService.isLogged()){
      this.router.navigate(['/mon-empreinte-carbone'])
    }
  }

}
