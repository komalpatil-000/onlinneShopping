import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }


  saveit(){
    
    this.router.navigate(['/payment']);

    }

    saveit1(){
     
      alert("Sucessfully Added to Your Cart");
      }

}
