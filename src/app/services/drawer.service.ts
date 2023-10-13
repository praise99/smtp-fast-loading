import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  public drawerToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }


  public toggle() {
    return this.drawerToggleSubject.next(null);
  }
}
