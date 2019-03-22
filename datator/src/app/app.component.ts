import { Component, OnInit  } from '@angular/core';
import { TestHttpService } from './service/test-http.service';
import APP_CONFIG from './app.config';
import { Node, Link } from './d3/d3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  constructor(private testHttpService: TestHttpService) {
    console.log(testHttpService.getdata());
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
