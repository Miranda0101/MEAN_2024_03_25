import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { UserService } from 'src/app/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CanVisitGuard implements CanActivate {
  constructor(private userService: UserService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // if (this.userService.userRole == 'admin'){
    //   return true;
    // } else {
    //   return false;
    // }
    return of({userRole: 'user'}).pipe(
      map((obj)=>{
        if (obj.userRole == 'admin') {return true}
        else { return false}
      })
    )
      
  }
  
}
