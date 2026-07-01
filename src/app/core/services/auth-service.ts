import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public login(username : string){
    const user = {name : username};
    localStorage.setItem('user', JSON.stringify(user))
  }

  public logout(){
    localStorage.removeItem('user');
  }

  public isLogged(){
    const user = localStorage.getItem('user');
    return !!user;
  }

  public getUsername() : string{
    if(this.isLogged()){
      return JSON.parse(localStorage.getItem('user')!).name;
    }
    return '';
  }
}
