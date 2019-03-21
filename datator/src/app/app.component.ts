import { Component, OnInit  } from '@angular/core';
import { TestHttpService } from './service/test-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	motcles : [];
  constructor(private testHttpService: TestHttpService) { 
  //this.getMotcles();
  }

  ngOnInit() {
  	//this.getMotcles();
  }

  getMotcles(): void {
  	let t;
    /*this.testHttpService.getdata()
        .subscribe(motcles => t = motcles);
        console.log(t);*/
  }
}
