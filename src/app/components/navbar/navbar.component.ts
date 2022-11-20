import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  // If { static: true }
  ngOnInit(): void {
  }
  
  status: boolean = false;
  myFunction() {
    this.status = !this.status;
  }


}
