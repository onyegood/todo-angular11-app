import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Error } from '../models/Error';
import { Hello } from '../models/Hello';
import { WelcomeDataService } from '../services/data/hello/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  name = '';
  id = '';
  message = '';
  error = '';

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(): void {
    this.service.executeHelloWorldBeanService().subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );
  }
  handleSuccessfulResponse(response: Hello) {
    this.message = response.message;
  }
  handleErrorResponse(error: Error) {
    this.error = error.error.message;
    /* 
      console.log(error.error.message);
      console.log(error.error.timestamp);
      console.log(error.error.path);
      console.log(error.error.trace);
      console.log(error.error.error); 
    */
  }

  getWelcomeMessageById(): void {
    this.service.executeHelloWorldBeanServiceById(this.name).subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    )
  }
}
