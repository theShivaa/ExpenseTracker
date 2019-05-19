import { Injectable } from "@angular/core";
import { Observable ,of} from "rxjs";

@Injectable()
export  class InitialData{
   data =[
    {
      'date':'5/19/2019',
      'amount':10,
      'category':'Other'
    },
    {
      'date':'5/19/2019',
      'amount':10,
      'category':'Other'
    },
    {
      'date':'5/19/2019',
      'amount':10,
      'category':'Other'
    }
  ]

  getData():Observable<any>{
    return of(this.data);
  }

  addData(d){
    console.log(this.data);
    this.data.push(d);
    console.log(this.data);
  }
}


