import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { MonitorModel } from './monitormodel';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class MonitorToolService {
	
	constructor(private http : Http) {}
	
	private _URL : string  = 'https://jsonplaceholder.typicode.com/posts';	
	
	private handleError(error:any):Promise<any>
	{
		console.error('An error occured',error);
		
		return Promise.reject(error.message || error);
	}
	
	/*GetValues():Observable<MonitorModel[]>{//Promise<MonitorModel[]>{		
		return this.http.get(this._URL)						
			.map(resp => resp.json())			
			.catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
				
	}
	*/
	
	GetSingleValue() : Observable<MonitorModel>{
		return this.http.get('http://localhost:18105/api/Values')
			.map(resp => resp.json())
			.catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
			
	}
	
}
