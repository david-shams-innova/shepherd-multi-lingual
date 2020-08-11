import { Component, AfterViewInit } from '@angular/core';
// import { ShepherdService } from 'angular-shepherd';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shepherd-multi-lingual';
}

// import { steps as defaultSteps, defaultStepOptions} from './data';

// @Component({
//   selector: 'shepherd',
//   templateUrl: './shepherd.component.html',
//   styleUrls: ['./shepherd.component.css']
// })
// export class ShepherdComponent implements AfterViewInit {

//   constructor(private shepherdService: ShepherdService) { }

//   ngAfterViewInit() {
//     this.shepherdService.defaultStepOptions = defaultStepOptions;
//     this.shepherdService.modal = true;
//     this.shepherdService.confirmCancel = false;
//     this.shepherdService.addSteps(defaultSteps);
//     this.shepherdService.start();
//   }
// }
