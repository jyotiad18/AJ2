import { Component , OnInit } from '@angular/core';
import { MonitorToolService } from './MonitorTool/Services/monitortoolservice';
import { MonitorModel } from './MonitorTool/Services/monitormodel';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-app', 		
  templateUrl :'./app/MonitorTool/View/app.component.html' ,
  providers: [ MonitorToolService]
})
export class AppComponent implements OnInit{ 
    
	    	
	public monitormodels : MonitorModel;	
	public username : string ;
	public mt : object;
	
	constructor(
		private _monitortoolservice : MonitorToolService
	) {}
	ngOnInit()
	{
		this.loadMonitortool()		
	
	}
	
	loadMonitortool() {
				
		this._monitortoolservice
		//.GetValues()
		.GetSingleValue()
		.subscribe(
		    monitormodels => {
				this.monitormodels = monitormodels;
				this.username = this.monitormodels.username;
				this.mt = monitormodels;
				// console.log(this.monitormodels.username);
				//console.log(monitormodels);
			},
		  err => {
			  console.log(err);
		  }
		);		
	}
	
    /* clickMessage = '' ; 	 	  
	name = 'Angular'; 
	divHide = true;
	firstName = '';
	lastName = '';
	nList = [
		{'name' : 'jyoti'},
		{'name' : 'jyoti1'},
		{'name' : 'jyoti2'}
	]
	
	onClickMe() {
		this.clickMessage = "ready";
		this.divHide = true;
	} */
	
	
 }
  