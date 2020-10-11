import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Shopping Cart Demo</a>
      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Sign Out</a>
        </li>
      </ul>
    </nav>
    <div class="container">
      <div class="jumbotron">
        <h1 class="display-4">Test Shopping Cart</h1>
        <p class="lead">
          This is a test application built for Keoghs interview process.
        </p>
      </div>
    </div>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
