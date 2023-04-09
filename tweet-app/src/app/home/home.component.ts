import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormControl } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  url = " http://localhost:3000/P_name";
  // constructor(private http: HttpClient) { 

  // }

  constructor(private activateRoute:ActivatedRoute, private router:Router)
  { }

  ngOnInit(): void{
    let query=this.activateRoute.snapshot.paramMap.get('box.value')
    console.warn("query: "+query);
  }

  addData(){
    // console.log(data);
    // let query=this.activateRoute.snapshot.paramMap.get('box.value')
    // console.warn("query2: "+query);
    this.router.navigateByUrl('app-analyze');
  }

 
}
