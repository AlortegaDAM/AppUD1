import { Injectable } from '@angular/core';
import { AutenticacionService } from './autenticacion.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {


  constructor(private autenticacionService:AutenticacionService) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){

    return this.autenticacionService.isAuthenticated();
  }
}
