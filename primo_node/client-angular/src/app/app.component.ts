
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  results: string[];
  private BASE_URL:string = '/api/products';
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.http.get('https://3000-ddc9a9e9-99db-4f81-a0e9-e819315218b9.ws-eu0.gitpod.io/api/products').subscribe(data => {
        // Read the result field from the JSON response.
        this.results = data['results'];
      });
    }
}
