import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
@Injectable()
export class UIService {

  darkModeState: BehaviorSubject<boolean>;
  constructor() { 
    //TODO user?signedin : getDefault firebase
    this.darkModeState = new BehaviorSubject<boolean>(false); 
  }
}
