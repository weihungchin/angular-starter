import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class SideNavService {
    public isToggleSubject = new BehaviorSubject<boolean>(null);
    public isToggle = this.isToggleSubject.asObservable();
    
    constructor() { }

    toggle(){
        this.isToggleSubject.next(true);
    }
}