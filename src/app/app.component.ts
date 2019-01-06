import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  countries: any[];

  // skuska
  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' }
  ]

  constructor(private http: Http) { }

  // skuska
  submit(f) {
    console.log(f);
  }

  /* onSubmit (user) {
     console.log(user);
     var body = "firstname=" + user.firstname + "&lastname=" + user.lastname + "&name=" + user.name;
     this.http.post("http://www.testtttt.com", body).subscribe((data) => {
       console.log(data);
     });
   }*/

  ngOnInit() {
    // countries do selectu v ulohe 3
    this.http.get('http://api.population.io:80/1.0/countries')
      .subscribe(response => {
        //console.log(response.json());
        this.countries = response.json();
        this.countries = Array.of(this.countries);
      })
  }

  


}
