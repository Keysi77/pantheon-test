import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'life-expectancy',
  templateUrl: './expectancy.component.html',
  styleUrls: ['./expectancy.component.css']
})
export class ExpectancyComponent implements OnInit {
  expectancy: any[];
  countries: any[];

  constructor(private http: Http) { }

  //log(x) {
  // console.log(x.value); 
  //}

  // premenne do ktorych sa  ulozia data z inputov
  sex: string = ''; 
  country: string = '';
  date: string = '';  // yyyy-mm-dd
  age: number = null;
  
  // URLs
  url: string = 'http://api.population.io:80/1.0/life-expectancy/remaining/male/United%20Kingdom/2001-05-11/49y2m/';
  newUrl: string = 'http://api.population.io:80/1.0/life-expectancy/remaining/' + this.sex + '/' + this.country + '/' + this.date + '/' + this.age + '/';


  log(x) {
    //let male = 'female';
    console.log(x.value);

    // male2: HTMLElement = document.getElementById("idInput");
    //male  = document.element( document.querySelector( '#some-id' ) );
    //console.log(male);
    // return 'http://api.population.io:80/1.0/life-expectancy/total//United%20Kingdom/1952-03-11/';
    //return male;
  }
  submit(f) {
    console.log(f);
  }

  ngOnInit() {
    this.http.get(this.url)
      .subscribe(response => {
        //console.log(response.json());
        this.expectancy = response.json();
      })
  }

  getAllCountries() {
    // countries do selectu v ulohe 3
    this.http.get('http://api.population.io:80/1.0/countries')
      .subscribe(response => {
        this.countries = response.json();
        this.countries = Array.of(this.countries);
      })
  }



}
