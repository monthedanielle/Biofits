import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StringUtilsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StringUtilsProvider {

  constructor(public http: HttpClient) {
    
  }
  
  public static format(str: string, ...parameters: any[]): string {
  
    if (str === null) {
      return str;
    } else {
      let strCpy = str;
      const nbParam = parameters.length;

      for (let i = 0; i < nbParam; i++) {
        strCpy = strCpy.replace('{' + i + '}', parameters[i]);
      }

      return strCpy;
    }
  }
  
  capitalize(value: string, args?: any): any {
    if(value && value != null){
      let valueArray = value.split(" ");
      for(let i = 0; i < valueArray.length; i++) {
        valueArray[i] = valueArray[i].charAt(0).toUpperCase() + valueArray[i].slice(1);;
      }
      return valueArray.join(' ');
    }
    return value;
  }

}
