import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage = 'Oops an error occured! Contact support at *******.';

  constructor() { }

  ngOnInit(): void {
  }

}
