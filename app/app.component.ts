import { Component, ElementRef, Input, animate, keyframes, state, style, transition, trigger } from '@angular/core';

@Component({
  selector: 'slide-panel',
  styles: ['label { padding:0; font-size:12px; color:#999;}', 'h4 {text-align:center; color: #F00; font-size: 18px;}'],
  host: {
  	'(document: click)': 'togglePanel($event)',
  },
  templateUrl: './app/panel.template.html',
  animations: [
        trigger('focusPanel', [
            state('inactive', style({
				display: 'none',
				transform: 'translateX(200px)',
            })),
            state('active', style({
				display: 'block',
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ]),
    ]
})

export class AppComponent{ 

	state:string = 'inactive';
	@Input() fName: string;
	@Input() lName: string;
	@Input() message: string;
	title:string = 'Contact';

	constructor(myElement : ElementRef) {
		this.elementRef = myElement;
	}

	togglePanel(event){

		let clickedComponent = event.target;
       	let inside = false;

		if(clickedComponent.id === 'close'){
			inside = false;
		} else {
			do {
	           if (clickedComponent === this.elementRef.nativeElement) {
	               inside = true;
	           }
	           clickedComponent = clickedComponent.parentNode;
	       	} while (clickedComponent);
		}

       	if(inside){
       		this.state = 'active';
       	} else {
       		this.state = 'inactive';
       	}
	}

	submitForm(fName, lName, message){
		if(fName && lName){
			console.log(fName);
			console.log(lName);
			console.log(message);
		}
	}
}