import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from  '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';

/* Customer component */

import { AppComponent }  from './app.component';
import { ApponeComponent }  from './approute.component';
import { ApptwoComponent } from './approutetwo.component';
import { AppHeadercomponent } from './MonitorTool/Layout/header';
import { AppFooterComponent } from './MonitorTool/Layout/footer';


@NgModule({
  imports:      [ 			    
				BrowserModule ,
				FormsModule , 
				HttpModule	,			
				RouterModule.forRoot(
				 [
				 {
					 path : 'one' ,
					 component : ApponeComponent
					 
				 } ,
				 {
					 path : 'two',
					 component:ApptwoComponent
				 }		 
				 ]				 				
				)			    
			],
  declarations: [ 
				AppComponent ,
				ApponeComponent ,
				ApptwoComponent,
				AppHeadercomponent,
			    AppFooterComponent				
				],
  bootstrap:    [ AppComponent					
				] ,  				
  providers:    [
                   { provide: APP_BASE_HREF, useValue: '/' }					
                 ]				
})
export class AppModule { }
